import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from "./reducers";

import { BrowserRouter as Router } from 'react-router-dom'
import routes from './routes'

import Menu from '../src/components/MenuBar'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger,thunk)))

ReactDOM.render(
    <Provider store={ store }>
        <Router routes={ routes }>
            <Menu/>
            { routes }
        </Router>
    </Provider>
    ,
    document.getElementById('root')
);
