import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Reset } from 'styled-reset'

import MainPage from './components/MainPage/MainPage';
import store from './tools/store';

ReactDOM.render(
  <>
  <Reset />
  <Provider store={store}>
  <MainPage />
  </Provider>
  </>,
  document.getElementById('root')
);