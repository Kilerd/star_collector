import React from 'react';
import ReactDOM from 'react-dom';
import APP from './Components/APP';
import { StoreProvider } from './store';

ReactDOM.render(
  <StoreProvider>
    <APP />
  </StoreProvider>,
  document.getElementById('root'),
);
