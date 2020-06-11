import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth, AuthContext } from './Context/Auth';

function PrivateRoute({ component: Component, ...rest }) {
    const { authTokens }= useAuth();
  
  return(
    <Route {...rest} 
    render={props=> authTokens?(
        <Component {...props}/>
    ):(<Redirect to="/"/>)}
    />
  );
}

export default PrivateRoute;