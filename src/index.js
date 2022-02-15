import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import {Provider} from 'redux';
import {configureStore} from './store';
import { config } from 'webpack';


ReactDOM.render(
    <Provider store={configureStore()}>
        <App />
    </Provider>, 
    document.getElementById('root'),
);