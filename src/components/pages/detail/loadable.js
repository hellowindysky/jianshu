import React, { Component } from 'react';
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
  loader: () => import('./Detail'),
  loading: () => {
    return <div>加载中...</div>
  }
});

class DetailSync extends Component {
  render() {
    return <LoadableComponent/>;
  }
}

export default DetailSync;