import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { LoginWrapper, LoginBox, Input, Button } from './style';
import { loginActions } from './store';

class Login extends PureComponent {
	render() {
		const { loginStatus } = this.props;
		if (!loginStatus) {
			return (
				<LoginWrapper>
					<LoginBox>
						<Input placeholder='账号' innerRef={(input) => {this.account = input}}/>
						<Input placeholder='密码' type='password' innerRef={(input) => {this.password = input}}/>
						<Button onClick={() => this.props.login(this.account, this.password)}>登陆</Button>
					</LoginBox>
				</LoginWrapper>
			)
		} else {
			return <Redirect to='/'/>
		}
	}
}

const mapState = (state) => {
  console.log(state.toJS());
  return {
    loginStatus: state.getIn(['loginReducer', 'login'])
  }
};

const mapDispatch = (dispatch) => ({
	login(accountElem, passwordElem){
		dispatch(loginActions.login(accountElem.value, passwordElem.value))
	}
})

export default connect(mapState, mapDispatch)(Login);