import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Theme from './styles/theme';
import GlobalStyles from './styles/components';
import AppRoutes from './routes'
import { Loading } from './components';

function App() {
  const { isLoading } = useAuth0()
  
  return (
    <>
      <GlobalStyles />
      <Theme>
        { isLoading ? <Loading /> : <AppRoutes /> }
      </Theme>
    </>
  );
}

export default App;
