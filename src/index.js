import 'sanitize.css/sanitize.css';
import './css/main.css';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import Welcome from './Welcome';
import Vote from './Vote';

// TODO: Render the `Vote` component instead of the `Welcome` one

render(
  <Provider store={store}>
    <Welcome />
  </Provider>,
  document.getElementById('root')
);
