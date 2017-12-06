import React from 'react'

class Login extends React.Component {
   getHash() {
    var hashParams = {};
    var e,
      regExPattern = /([^&;=]+)=?([^&;]*)/g,
      hashString = window.location.hash.substring(1);
    while (e = regExPattern.exec(hashString)) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }

  componentDidMount() {
    var params = this.getHash();
    this.props.accessToken(params.access_token);
    if (params.access_token) {
        this.props.getUserInfo();
    }
  }
  render () {
    return null;
  }
}
export default Login;