import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import Auth from '../../Auth0'
import AuthService from './AuthService'


const SecretRoute = ({ component: Component, ...rest }) => (

   console.log('component', Auth),
   
   <Route 
   {...rest} 
   render={(props) => (
         // console.log('Token', Auth.idToken),
  
         AuthService.isAuthenticated === true
        ? <Component {...props} />
        : <Redirect to={{
            pathname: '/',
            // state: { from: props.location },
          }} />
    )} />
  );

  export default SecretRoute