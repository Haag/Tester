import auth0 from 'auth0-js'
import history from './History';

class Auth {
    //The constructior sets and grabs info.. Placing it in `this.auth0`
    constructor() {
        this.auth0 = new auth0.WebAuth({
            domain: 'haag.auth0.com',
            audience: 'https://haag.auth0.com/userinfo',
            clientID: 'jI0TjrDd48ZhDbuKh0INRNUPFqV0A579',

            //should match Allowed Callback URL on Auth0.com
            redirectUri: 'http://localhost:3000/callback',
            responseType: 'id_token',
            scope: 'openid profile email'
        })
        this.getProfile = this.getProfile.bind(this)
        this.getIdToken = this.getIdToken.bind(this)
        this.handleAuthentication = this.handleAuthentication.bind(this)
        this.isAuthenticated = this.isAuthenticated.bind(this)
        this.signIn = this.signIn.bind(this)
        this.signOut = this.signOut.bind(this)
    }

    getProfile() {
        return this.profile
    }

    getIdToken() {
        return this.idToken
    }

    isAuthenticated() {
        const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt
    }
    getAccessToken() {
        const accessToken = localStorage.getItem('access_token');
        if (!accessToken) {
          throw new Error('No Access Token found');
        }
        return accessToken;
      }
    
    signIn() {
        this.auth0.authorize()
    }

    //Called immediately after being redirected from auth0
    //Fetches user details and idToken
    handleAuthentication() {
        return new Promise((resolve, reject) => {
            //taking the info from this.auth0 above and parsing it
            //authResult is the token_payload
          this.auth0.parseHash((err, authResult) => {
            if (err) return reject(err);
            if (!authResult || !authResult.idToken) {
              return reject(err);
            }
            if (authResult && authResult.accessToken && authResult.idToken){
                this.setSession(authResult)
            }
            //setting all the things we want. Can add email, etc
            this.idToken = authResult.idToken;
            this.profile = authResult.idTokenPayload;
            // set the time that the id token will expire at
            this.expiresAt = authResult.idTokenPayload.exp * 1000;
            resolve();
          });
        })
      }
      setSession(authResult) {
        // Set the time that the access token will expire at
        const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
        // navigate to the dashboard route
        history.replace('/dashboard');
      }
      signOut(){
         // Clear access token and ID token from local storage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        // navigate to the home route
        history.replace('/');
        }
}

const auth = new Auth()

export default auth