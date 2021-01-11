import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Login from './component/login'
import Logout from './component/logout'

const AuthNav = () =>{
  const { isAuthenticated, user } = useAuth0()
  return (
    <nav>
      {isAuthenticated ? <Logout /> : <Login /> }
    </nav>
  );
}

function App() {
  const { isLoading } = useAuth0()
  if(isLoading) {
    return <div> Loading... </div>
  }
  return (
    <>
      <AuthNav />
      <h1>Jumga E-Commerce Store </h1>
    </>
  );
}

export default App;
