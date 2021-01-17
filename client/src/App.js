import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Theme from './styles/theme';
import GlobalStyles from './styles/components';
import AppRoutes from './routes'
import { Loading, ChooseCountry } from './components';
import { useLocalStorage } from './utils';


function App() {
  const { isLoading } = useAuth0()
  const [usersCountry, setUsersCountry] = useLocalStorage('usersCountry', null);  
  return (
    <>
      <GlobalStyles />
      <Theme>
        { isLoading ?
          <Loading /> : 
          <>{ !usersCountry ?
                <ChooseCountry setCountry={setUsersCountry}/> 
                :<AppRoutes />} 
          </>
        }
      </Theme>
    </>
  );
}

export default App;
