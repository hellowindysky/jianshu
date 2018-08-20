import React, { Component } from 'react';
import { connect } from 'react-redux';

import List from './components/List';
import Recommend from './components/Recommend';
import Topic from './components/Topic';
import Writer from './components/Writer';
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style';

import { homeActions } from './store';

class Home extends Component {

  handleScrollTop = () => {
    window.scrollTo(0, 0);
  }

  componentDidMount() {
    this.props.getHomeData();
    window.addEventListener('scroll', this.props.changeScrollShow);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollShow)
  }
  
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4369/0cc77fa3ef12b099ba0237da2616c87cba0f58ae.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
          <Topic />
					<List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
					<Writer />
        </HomeRight>
        {this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>∧</BackTop> : null}
      </HomeWrapper>
    )
  }

}

const mapStateToProps = (state) => {
  return {showScroll: state.getIn(['homeReducer', 'showScroll'])}
}

const mapDispatchToProps = (dispatch) => {
  return {
    getHomeData() {
      dispatch(homeActions.getHomeData())
    },
    changeScrollShow() {
      if (window.scrollY >= 100) {
        dispatch(homeActions.toggleTopShow(true));
      } else {
        dispatch(homeActions.toggleTopShow(false));
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);