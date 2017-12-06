import axios from 'axios';
import userInfo from './userInfo';


function getUserInfo() {
  return function(dispatch, getState) {
    let state = getState();
    axios({
      method: 'get',
      url: 'https://api.spotify.com/v1/me',
      headers: {
        'Authorization': 'Bearer ' + state.reducer.access_token
      }
    }).then(response => dispatch(userInfo(response.data)));
  };
}
export default getUserInfo;