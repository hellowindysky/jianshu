import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ListItem, ListInfo, LoadMore } from '../style';

class List extends Component {
  
  render() {
    const { list } = this.props;
    return (
      <div>
        {
          list.map((item, index) => {
            return (
              <ListItem key={index}>
                <img className='pic' src={item.imgUrl} alt={item.title} />
                <ListInfo>
                  <h3 className='title'>{item.title}</h3>
                  <p className='desc'>{item.desc}</p>
                </ListInfo>
              </ListItem>
            )
          })
        }
        
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {list : state.toJS().homeReducer.articList}
}

export default connect(mapStateToProps)(List);