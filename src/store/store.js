// import {createStore, compose} from 'redux';
import {createStore} from 'redux';
import reducers from './reducers';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(reducers, composeEnhancers());
const store = createStore(reducers);

export default store;