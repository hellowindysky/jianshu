import React from 'react';
import {connect} from 'react-redux';
import {HeaderWrapper, Logo, Nav, NavItem, SearchWrapper, NavSearch, Addition, Button} from './style';

import {handleIptFocus, handleIptBlur} from './store/actions';

const Jheader = (props) => {
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
          <NavSearch className={props.focused ? 'focused' : ''}
           onFocus={() => {props.handleIptFocus(true)}}
           onBlur={() => {props.handleIptBlur(false)}}>
          </NavSearch>
          <i className={props.focused ? 'focused iconfont' : 'iconfont'}>&#xe617;</i>
        </SearchWrapper>
      </Nav>
      <Addition className="aaa">
        <Button className="writting">
          <i className="iconfont">&#xe615;</i>写文章
        </Button>
        <Button className="reg">注册</Button>
      </Addition>
    </HeaderWrapper>
  )
}

export default connect((state) => {
  return {...state.headerReducer}
}, {
  handleIptFocus,
  handleIptBlur
})(Jheader);