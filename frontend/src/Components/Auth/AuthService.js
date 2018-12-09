import auth0Client from '../../Auth0'

console.log("IDTOKEN", auth0Client.idToken)

// if(auth0Client.idToken === null){
//     console.log("NO")
// } else {
//     console.log("YES")
// }
const AuthService = {
    isAuthenticated: false,
    authenticate(cb) {
        this.isAuthenticated = true
        setTimeout(cb, 100)
    },
    logout(cb) {
      this.isAuthenticated = false
      setTimeout(cb, 100)
    }
  };

  export default AuthService