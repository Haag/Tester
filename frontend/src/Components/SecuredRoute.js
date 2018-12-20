import React from 'react'
import { Route} from 'react-router-dom'
import auth from '../Auth0'

function SecuredRoute(props) {
    console.log('props', props);
    
    const {component: Component, path, checkingSession} = props
    return (
        <Route path={path} render={() => {
            if (checkingSession) return <h3 className="text-center">Validating Session(You may lack permission)</h3>
            if(!auth.isAuthenticated) {
                auth.signIn()
                return <div>What's this for?</div>
            }
            return <Component />
        }} />
    )
}

export default SecuredRoute