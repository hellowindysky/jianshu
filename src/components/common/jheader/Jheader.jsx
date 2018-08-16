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

  getListArea = (show, list) => {
    if (show) {
      return (
        <SearchInfo>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch>换一批</SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {
              list.map((item) => {
                return <SearchInfoItem key={item}>{item}</SearchInfoItem>
              })
            }
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null;
    }
  }

  render() {
    console.log(this.props);
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
            <NavSearch className={this.props.focused ? 'focused' : ''}
             onFocus={this.props.handleIptFocus}
             onBlur={this.props.handleIptBlur}>
            </NavSearch>
            <i className={this.props.focused ? 'focused iconfont' : 'iconfont'}>&#xe617;</i>
            {this.getListArea(this.props.focused, this.props.list)}
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