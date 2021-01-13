import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { withAuthenticationRequired } from '@auth0/auth0-react' 
import { NavBar, Loading } from './components'
import { Storefront, Profile, OrderHistory, MerchantsStore, JumgaAdmin, NotFound } from "./pages"

const PrivateRoute = ({ component, ...args }) => (
    <Route
        component = { withAuthenticationRequired(component, {
            onRedirecting: () => <Loading />
        }) }
        {...args}
    /> 
);



const AppRoutes = props => {
  return (
      <Router>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Storefront}/>
          <PrivateRoute exact path='/profile' component={Profile}/>
          <PrivateRoute exact path='/orders' component={OrderHistory}/>
          <PrivateRoute exact path='/mystore' component={MerchantsStore}/>
          <PrivateRoute exact path='/jumgaadmin' component={JumgaAdmin}/>
          <Route component={NotFound} />
        </Switch>
      </Router>
  );
};

export default AppRoutes;