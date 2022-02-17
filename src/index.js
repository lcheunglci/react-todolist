import React from 'react';
import ReactDOM from 'react-dom';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import App from './App.js';

import {configureStore} from './store';

const store = configureStore();
const persistor = persistStore(store);

ReactDOM.render(
    <Provider store={store}>
      <PersistGate 
        persistor={persistor}
        loading={<div>Loading...</div>}
        >
        <App />
      </PersistGate>
    </Provider>, 
    document.getElementById('root'),
);