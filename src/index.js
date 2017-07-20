import 'sanitize.css/sanitize.css';
import './css/main.css';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import Vote from './Vote';

render(
  <Provider store={store}>
    <Vote />
  </Provider>,
  document.getElementById('root')
);
