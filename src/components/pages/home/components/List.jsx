import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { ListItem, ListInfo, LoadMore } from '../style';

import { homeActions } from '../store';

class List extends Component {
  
  render() {
    const { list, getMoreList } = this.props;
    return (
      <div>
        {
          list.map((item, index) => {
            return (
              <Link to={'/detail/' + item.id} key={index}>
                <ListItem>
                  <img className='pic' src={item.imgUrl} alt={item.title} />
                  <ListInfo>
                    <h3 className='title'>{item.title}</h3>
                    <p className='desc'>{item.desc}</p>
                  </ListInfo>
                </ListItem>
              </Link>
            )
          })
        }
        <LoadMore onClick={getMoreList}>加载更多</LoadMore>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {list : state.toJS().homeReducer.articList}
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMoreList() {
      dispatch(homeActions.getMoreList());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);