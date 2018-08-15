import React, { Component } from 'react';
import {HeaderWrapper, Logo, Nav, NavItem, SearchWrapper, NavSearch, Addition, Button} from './style';

class Jheader extends Component {

  constructor(props) {
    super(props);
    this.state = {
      focused: false
    }
  }

  handleIptFocus = () => {
    this.setState({focused: true});
  }

  handleIptBlur = () => {
    this.setState({focused: false});
  }

  render() {
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
            <NavSearch className={this.state.focused ? 'focused' : ''}
             onFocus={this.handleIptFocus}
             onBlur={this.handleIptBlur}>
            </NavSearch>
            <i className={this.state.focused ? 'focused iconfont' : 'iconfont'}>&#xe617;</i>
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
}

export default Jheader;