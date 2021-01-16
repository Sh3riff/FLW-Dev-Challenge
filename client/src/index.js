import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
 import { QueryClient, QueryClientProvider} from 'react-query'
import Auth0ProviderWithHistory from './Auth0ProviderWithHistory';
import { CartContextProvider } from './contexts';

const queryClient = new QueryClient()

ReactDOM.render(
  <Auth0ProviderWithHistory>
    <QueryClientProvider client={queryClient}>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </QueryClientProvider>
  </Auth0ProviderWithHistory>,
  document.getElementById('root')
);