import React, { Component } from 'react';
import { connect } from 'react-redux';

import { TopicWrapper, TopicItem } from '../style';

class Topic extends Component {
  
  render() {
    console.log(this.props);
    const { topicList } = this.props;
    return (
      <TopicWrapper>
        {
          topicList.map((item) => {
            return (
              <TopicItem key={item.id}>
                <img className="topic-pic" src={item.imgUrl} alt={item.title}/>
                {item.title}
              </TopicItem>
            )
          })
        }
      </TopicWrapper>
    )
  }

}

const mapStateToprops = (state) => {
  return {...(state.toJS().homeReducer)}
}

export default connect(mapStateToprops, null)(Topic);