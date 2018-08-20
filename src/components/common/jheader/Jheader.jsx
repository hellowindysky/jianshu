import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
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
import { loginActions } from '../../pages/login/store';

class Jheader extends Component {

  getListArea = () => {
    const { focused, mouseInList, list, page, totalPage, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
    let subList = [];
    for (let i = (page - 1) * 10; i < page * 10; i++) {
      if (list.length === 0 || !list[i]) {
        break;
      }
      subList.push(<SearchInfoItem key={list[i]}>{list[i]}</SearchInfoItem>)
    }

    if (focused || mouseInList) {
      return (
        <SearchInfo
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave}>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch onClick={() => {handleChangePage(page, totalPage, this.spinIcon)}}>
              <i ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe851;</i>换一批
            </SearchInfoSwitch>
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
    const { focused, list, handleIptFocus, handleIptBlur, login, logout } = this.props;
    return (
      <HeaderWrapper>
        <Link to="/">
          <Logo></Logo>
        </Link>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载APP</NavItem>
          {
						login ? 
							<NavItem onClick={logout} className='right'>退出</NavItem> : 
							<Link to='/login'><NavItem className='right'>登陆</NavItem></Link>
					}
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <NavSearch className={focused ? 'focused' : ''}
             onFocus={() => {handleIptFocus(list)}}
             onBlur={handleIptBlur}>
            </NavSearch>
            <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe617;</i>
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
  return {
    ...(state.toJS().headerReducer),
    login: state.toJS().loginReducer.login
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleIptFocus(list) {
      list.length === 0 && dispatch(headerActions.getList());
      dispatch(headerActions.handleIptFocus(true));
    },
    handleIptBlur() {
      dispatch(headerActions.handleIptBlur(false));
    },
    handleMouseEnter() {
      dispatch(headerActions.handleMouseEnter(true));
    },
    handleMouseLeave() {
      dispatch(headerActions.handleMouseLeave(false));
    },
    handleChangePage(page, totalPage, spin) {
      let oldAng = spin.style.transform.replace(/[^0-9]/ig, '');
      spin.style.transform = `rotate(${Number(oldAng) + 360}deg)`;
      if (page < totalPage) {
        dispatch(headerActions.handleChangePage(page + 1));
      } else {
        dispatch(headerActions.handleChangePage(1));
      }
    },
    logout() {
      dispatch(loginActions.logout())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Jheader);