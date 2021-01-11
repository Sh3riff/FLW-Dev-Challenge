import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Auth0ProviderWithHistory from './Auth0ProviderWithHistory'

ReactDOM.render(
  <Auth0ProviderWithHistory>
    <App />
  </Auth0ProviderWithHistory>,
  document.getElementById('root')
);
