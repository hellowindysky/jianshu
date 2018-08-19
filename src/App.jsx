import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Jheader from './components/common/jheader/Jheader';
import Home from './components/pages/home/Home';
import Detail from './components/pages/detail/Detail';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Jheader></Jheader>
        <BrowserRouter>
          <Switch>
            <Route path="/home" component={Home}></Route>
            <Route path="/detail" component={Detail}></Route>
            <Redirect to="/home"></Redirect>
          </Switch>
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default App;
