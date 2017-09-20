import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import StarshipsLibrary from './components/starships-library';


const container = document.getElementById('root');

render(
  <Provider store={store}>
    <StarshipsLibrary />
  </Provider>,
  container
);
