import React from 'react';
import ReactDOM from 'react-dom';

import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk';


import reducer from './reducers'
import './index.css';
import Routes from './routes.js';


const middlewares = [thunk]
const store = createStore(
    reducer,
    applyMiddleware(...middlewares))


ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>,
    document.getElementById('root'));
