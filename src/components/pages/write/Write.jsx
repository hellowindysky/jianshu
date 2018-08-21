import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// import { LoginWrapper, LoginBox, Input, Button } from './style';
// import { loginActions } from './store';

class Write extends PureComponent {
	render() {
		const { loginStatus } = this.props;
		if (loginStatus) {
			return (
				<div>
          <h1 style={{'fontSize':'200px'}}>写文章</h1>
        </div>
			)
		} else {
			return <Redirect to='/login'/>
		}
	}
}

const mapState = (state) => {
  console.log(state.toJS());
  return {
    loginStatus: state.getIn(['loginReducer', 'login'])
  }
};

// const mapDispatch = (dispatch) => ({
// 	login(accountElem, passwordElem){
// 		dispatch(loginActions.login(accountElem.value, passwordElem.value))
// 	}
// })

export default connect(mapState, null)(Write);
// export default Write;