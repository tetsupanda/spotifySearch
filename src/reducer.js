import constants from './actions/constants';

class mainState {
  constructor() {
    this.searchKey = "";
    this.isSearching = false;
    this.searchResults = {};
    this.access_token='';
    this.user = {};
  }
}

const reducer = (state= new mainState(), action) => {

  switch (action.type) {
      case constants.CHANGE_SEARCH_KEY:
        return handleChangeSearchKey(state, action);
      case constants.Search_Started:
        return handleSearchStarted(state);
      case constants.SEARCH_COMPLETED:
        return handleSearchCompleted(state, action);
      case constants.SET_ACCESS_TOKEN:
        return handleSetAccessToken(state, action);
      case constants.SET_USER_DETAILS:
        return handleSetUserDetails(state, action);
    }
    return state;
  }

  const handleChangeSearchKey = (state, action)=> {
    return {
      ...state,
      searchKey: action.searchKey
    }
  }

  const handleSearchStarted = (state)=> {
    return {
      ...state,
      isSearching: true
    }
  }

  const handleSearchCompleted = (state, action)=> {
    return {
      ...state,
      isSearching: false,
      searchResults: action.results
    }
  }

  const handleSetAccessToken = (state, action) => {
    return {
      ...state,
      access_token: action.token
    }
  }

  const handleSetUserDetails = (state, action) => {
    return {
      ...state,
      user: action.user
    }
  }

export default reducer;