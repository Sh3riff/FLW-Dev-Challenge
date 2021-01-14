import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Auth0ProviderWithHistory from './Auth0ProviderWithHistory';
import { CartContextProvider } from './contexts';

ReactDOM.render(
  <Auth0ProviderWithHistory>
    <CartContextProvider>
      <App />
    </CartContextProvider>
  </Auth0ProviderWithHistory>,
  document.getElementById('root')
);
