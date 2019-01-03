import React from 'react'
import { Route} from 'react-router-dom'
import auth from '../Auth0'
import { Redirect } from 'react-router-dom'


function SecuredRoute(props) {    
    // console.log("ChkSession", props.checkingSession)
    const {component: Component, path, checkingSession} = props
    return (
        <Route path={path} render={() => {
            if (checkingSession === true) {
                return <Redirect to="/"/> 
                // return auth.signIn()
            } else {
                return <Component />
            }
        }} />
    )
}

export default SecuredRoute


