import React from 'react'
import { Redirect, Route} from 'react-router-dom'

function SecuredRoute(props) {    
    // console.log("ChkSession", props.checkingSession)
    const {component: Component, path, checkingSession} = props
    return (
        <Route path={path} render={() => {
            if (checkingSession === true) {
                return <Redirect to="/dogs"/> 
                // return auth.signIn()
            } else {
                return <Component />
            }
        }} />
    )
}

export default SecuredRoute


