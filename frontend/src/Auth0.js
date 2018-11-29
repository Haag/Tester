import auth0 from 'auth0-js'

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
        return new Date().getTime() < this.expiresAt
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
            //setting all the things we want. Can add email, etc
            this.idToken = authResult.idToken;
            this.profile = authResult.idTokenPayload;
            // set the time that the id token will expire at
            this.expiresAt = authResult.idTokenPayload.exp * 1000;
            resolve();
          });
        })
      }

      signOut(){
          this.idToken = null
          this.profile = null
          this.expiresAt = null
      }
}

const auth0Client = new Auth()

export default auth0Client