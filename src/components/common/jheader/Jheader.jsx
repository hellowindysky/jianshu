import React, { Component } from 'react';
import {connect} from 'react-redux';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
  Addition,
  Button
} from './style';

import { headerActions } from './store';
const { handleIptFocus, handleIptBlur, getList } = headerActions;

class Jheader extends Component {

  getListArea = () => {
    const { focused, list, page, totalPage } = this.props;
    let subList = [];

    for (let i = (page - 1) * 10; i < page * 10; i++) {
      subList.push(<SearchInfoItem key={i}>{list[i]}</SearchInfoItem>)
    }

    if (focused) {
      return (
        <SearchInfo>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch>换一批</SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {subList}
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null;
    }
  }

  render() {
    console.log(this.props);
    const { focused, handleIptFocus, handleIptBlur } = this.props;
    return (
      <HeaderWrapper>
        <Logo></Logo>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载APP</NavItem>
          <NavItem className="right">登陆</NavItem>
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <NavSearch className={focused ? 'focused' : ''}
             onFocus={handleIptFocus}
             onBlur={handleIptBlur}>
            </NavSearch>
            <i className={focused ? 'focused iconfont' : 'iconfont'}>&#xe617;</i>
            {this.getListArea()}
          </SearchWrapper>
        </Nav>
        <Addition className="aaa">
          <Button className="writting">
            <i className="iconfont">&#xe615;</i>写文章
          </Button>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {...state.headerReducer}
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleIptFocus() {
      dispatch(handleIptFocus(true));
      dispatch(getList());
    },
    handleIptBlur() {
      dispatch(handleIptBlur(false));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Jheader);