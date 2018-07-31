import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import AppRoute from './Routes/index';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducers from './reducers'
import registerServiceWorker from './registerServiceWorker';
//import { getCategories } from './actions/categoriesActions'

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

//store.dispatch(getCategories())
//.then(list => store.dispatch(list))

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