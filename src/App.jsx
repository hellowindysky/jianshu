import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Jheader from './components/common/jheader/Jheader';
import Home from './components/pages/home/Home';
import Detail from './components/pages/detail/loadable';
import Write from './components/pages/write/Write';
import Login from './components/pages/login/Login';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Jheader></Jheader>
          <Switch>
            <Route path="/home" component={Home}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/detail/:id" component={Detail}></Route>
            <Route path="/write" component={Write}></Route>
            <Redirect to="/home"></Redirect>
          </Switch>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
