import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import questionStore from './store/questionStore';

const store = questionStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('index')
)