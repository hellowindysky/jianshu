import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { DetailWrapper, Header, Content } from './style';

import { detailActions } from './store';

class Detail extends Component {

  componentDidMount() {
    console.log(this.props);
    this.props.getDetail(this.props.match.params.id);
  }
  
  render() {
    return (
      <DetailWrapper>
        <Header>{this.props.title}</Header>
        <Content dangerouslySetInnerHTML={{__html: this.props.content}}></Content>
      </DetailWrapper>
    )
  }

}

const mapState = (state) => ({
	title: state.getIn(['detailReducer', 'title']),
	content: state.getIn(['detailReducer', 'content'])
});

const mapDispatch = (dispatch) => ({
	getDetail(id) {
		dispatch(detailActions.getDetail(id));
	}
});

export default connect(mapState, mapDispatch)(withRouter(Detail));