import React from 'react';
import App from './App';

import './index.css';
import reportWebVitals from './reportWebVitals';

import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import todoApp from './reducers/reducers'

let store = createStore(todoApp)
let rootElement = document.getElementById('app')

render(
  <Provider store={store}>
    <App />
  </Provider>,

  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
