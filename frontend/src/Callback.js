import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import auth0Client from './Auth0';

//This fetches the info from handleAuthentication
//And then it redirects back to '/'
//While it's gathering the data, prints loading, then redirects to home
class Callback extends Component {
    async componentDidMount() {
        await auth0Client.handleAuthentication()
        this.props.history.replace('/')
    }

    render(){
        return (
            <p>Loading Profile...</p>
        )
    }
}

export default withRouter(Callback)