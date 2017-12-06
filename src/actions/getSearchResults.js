import axios from 'axios';
import beginSearch from '../actions/beginSearch';
import resultsReturned from '../actions/resultsReturned';

function getSearchResults() {
  return function(dispatch, getState) {

    let state = getState();

    if (!state.reducer.searchKey || state.reducer.searchKey.trim()==='') {
      return;
    }

    dispatch(beginSearch());

    axios({
      method: 'get',
      url: 'https://api.spotify.com/v1/search',
      headers: {
        'Authorization': 'Bearer ' + state.reducer.access_token
      },
      params: {
        q: state.reducer.searchKey,
        type: 'album,artist,playlist,track',
      }
    })
      .then(response => dispatch(resultsReturned(response.data)))
      .catch(error => { dispatch(resultsReturned({})); 

        console.log(error.config);

      }
    );
  };

}
export default getSearchResults;