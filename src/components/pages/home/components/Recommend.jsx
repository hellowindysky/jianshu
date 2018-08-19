import React, { Component } from 'react';
import { connect } from 'react-redux';

import { RecommendWrapper, RecommendItem } from '../style';

class Recommend extends Component {
  
  render() {
    const {list} = this.props;
    return (
      <RecommendWrapper>
        {
					list.map((item) => {
						return <RecommendItem imgUrl={item.id} key={item.id}/>
					})
				}
      </RecommendWrapper>
    )
  }

}

const mapStateToProps = (state) => {
  return {list: state.toJS().homeReducer.recommendList}
}

export default connect(mapStateToProps)(Recommend);