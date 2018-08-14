import React, { Component } from 'react';
import {HeaderWrapper, Logo, Nav, NavItem, NavSearch} from './style';

class Jheader extends Component {
  render() {
    return (
      <HeaderWrapper>
        <Logo></Logo>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载APP</NavItem>
          <NavItem className="right">登陆</NavItem>
          <NavItem className="right">Aa</NavItem>
          <NavSearch></NavSearch>
        </Nav>
      </HeaderWrapper>
    )
  }
}

export default Jheader;