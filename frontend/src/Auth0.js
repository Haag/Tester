import auth0 from 'auth0-js'
import history from './History';
import { Redirect } from 'react-router-dom'

class Auth {
    //The constructior sets and grabs info.. Placing it in `this.auth0`
    constructor() {
        this.auth0 = new auth0.WebAuth({
            domain: 'haag.auth0.com',
            audience: 'https://haag.auth0.com/userinfo',
            clientID: 'jI0TjrDd48ZhDbuKh0INRNUPFqV0A579',

            //should match Allowed Callback URL on Auth0.com
            redirectUri: 'http://localhost:3000/callback',
            responseType: 'token id_token',
            scope: 'openid profile email'
        })
        // this.getProfile = this.getProfile.bind(this)
        this.handleAuthentication = this.handleAuthentication.bind(this)
        this.isAuthenticated = this.isAuthenticated.bind(this)
        this.signIn = this.signIn.bind(this)
        this.signOut = this.signOut.bind(this)

        // this.getIdToken = this.getIdToken.bind(this)
        // this.getAccessToken = this.getAccessToken.bind(this)
    }

    getProfile() {
        return this.profile
    }
    getIdToken() {
        return this.idToken
    }

    // OLD WAY
    // isAuthenticated() {
    //     return new Date().getTime() < this.expiresAt;
    //   }

    isAuthenticated() {
        const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt
    }

    signIn() {
        this.auth0.authorize()
    }

    signOut(){
      // Clear access token and ID token from local storage
      localStorage.removeItem('access_token');
      localStorage.removeItem('id_token');
      localStorage.removeItem('expires_at');
    
        this.auth0.logout({
          returnTo: 'http://localhost:3000',
          clientID: 'jI0TjrDd48ZhDbuKh0INRNUPFqV0A579'
        })
      }

    // getAccessToken() {
    //     const accessToken = localStorage.getItem('access_token');
    //     if (!accessToken) {
    //       throw new Error('No Access Token found');
    //     }
    //     return accessToken;
    //   }
    

    //Called immediately after being redirected from auth0
    //Fetches user details and idToken
    handleAuthentication() {
        return new Promise((resolve, reject) => {
          this.auth0.parseHash((err, authResult) => {
            if (err) return reject(err);
            if (!authResult || !authResult.idToken) {
              return reject(err);
            }
            this.setSession(authResult)
            resolve();
          });
        })
      }

      // OLD WAY
      // setSession(authResult) {
      //     console.log("SetSession was called")
      //     console.log("Auth Result Baby", authResult)
      //   this.accessToken = authResult.accessToken;
      //   // console.log('accessToken', this.accessToken);
      //   this.idToken = authResult.idToken;
      //   // console.log('this.idToken', this.idToken);
      //   this.profile = authResult.idTokenPayload;
      //   // console.log('this.profile', this.profile);
      //   this.expiresAt = authResult.expiresIn * 1000 + new Date().getTime();
      // }


      setSession(authResult) {
          console.log("SETSESSION WAS CALLED")
        // Set the time that the access token will expire at
        const expiresAt = JSON.stringify(authResult.expiresIn * 1000 + new Date().getTime())

        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
        // navigate to the dashboard route
        // history.replace('/dashboard');
      }

      silentAuth() {
        return new Promise (( resolve, reject) => {
          this.auth0.checkSession({}, (err, authResult) => {
            if(err) return reject(err)
            this.setSession(authResult)
            resolve()
          })
        })
      }
      
}

const auth = new Auth()

export default auth