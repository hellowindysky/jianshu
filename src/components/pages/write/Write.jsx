import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

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

export default connect(mapState, null)(Write);