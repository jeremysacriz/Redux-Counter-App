import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import { App } from './App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { counterReducer } from './redux/reducers/counterReducer';

const store = configureStore({
  reducer: counterReducer,
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
