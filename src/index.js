import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppRoute from './Routes/index';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducers from './reducers'
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
    <Provider store={store}>
        <AppRoute />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
/**
 

ReactDOM.render(
    <Provider store={store}>
        <AppRoute />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();



 */