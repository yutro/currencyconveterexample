import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { store } from './redux';
import { AppLayout } from './components/AppLayout/AppLayout';

ReactDOM.render(
  <Provider store={store}>
    <AppLayout />
  </Provider>,
  document.getElementById('root')
);
serviceWorker.register();
