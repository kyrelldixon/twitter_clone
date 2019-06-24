import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../../hooks';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [{ isAuthenticated },] = useAuth();
  
  const renderRedirect = (props) => (
    isAuthenticated ? 
      <Component {...props} />
      : <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
  )
  
  return (
    <Route {...rest} render={renderRedirect} />
  )
}

export default PrivateRoute;