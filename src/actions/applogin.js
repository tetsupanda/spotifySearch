function applogin() {
  
    var redirect_uri;
    if (process.env.NODE_ENV === 'production') {
      redirect_uri = 'https://spotifyalbumsearch.azurewebsites.net/';
    } else {
      redirect_uri = 'http://localhost:3000/';
    }
  
    var url = 'https://accounts.spotify.com/authorize';
    url += '?response_type=token';
    url += '&client_id=' + encodeURIComponent('5c25a2ac195749f5a9a6ac41257fe512');
    url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
    window.location = url;
  }
  
  export default applogin;