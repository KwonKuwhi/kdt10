import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App1';

import isVisibleReducer from './store/isVisibleReducer';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './store';
import { composeWithDevTools } from 'redux-devtools-extension';

const root = ReactDOM.createRoot(document.getElementById('root'));
// const store = createStore(isVisibleReducer);
const store = configureStore({ reducer: rootReducer }, composeWithDevTools());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
