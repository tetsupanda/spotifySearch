import * as React from 'react';
import MaterialUiTheme from './materialUiTheme';
import SearchBar from './searchbar';
import Login from './login';
import Albumlist from './albumList';

const core = (props) => {

  return (
    <MaterialUiTheme>
      <div className="full-height">
        <SearchBar
          searchKey={props.searchKey}
          user={props.user}
          isSearching={props.isSearching}
          newSearch={props.newSearch}
          handleOnLogin={props.handleOnLogin}
          isLoggedIn={!!props.access_token}
          getSearchResults={() => props.handleOnSearch()}/>
        <div className="full-height force-nav-down">
          <Login
            accessToken={props.accessToken}
            getUserInfo={props.getUserInfo}/>

          <div id="results-container">
            <Albumlist
              searchResults={props.searchResults}
              isSearching={props.isSearching}/>
          </div>
        </div>
      </div>
    </MaterialUiTheme>
  )
}

export default core