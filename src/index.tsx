import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Exchange } from './pages/Exchange/Exchange';
import * as serviceWorker from './serviceWorker';
import { store } from './redux';

ReactDOM.render(
  <Provider store={store}>
    <Exchange />
  </Provider>,
  document.getElementById('root')
);
serviceWorker.register();
