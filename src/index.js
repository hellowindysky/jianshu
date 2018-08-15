import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import store from './store/store';
import {Provider} from 'react-redux';

import './style.js';
import './statics/iconfont/iconfont.js';

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
