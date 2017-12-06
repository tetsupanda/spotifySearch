import newSearch from '../actions/newSearch';
import beginSearch from '../actions/beginSearch';
import resultsReturned from '../actions/resultsReturned';
import getSearchResults from '../actions/getSearchResults';
import accessToken from '../actions/accessToken';
import getUserInfo from '../actions/getUserInfo';
import applogin from '../actions/applogin';
import { connect } from 'react-redux';
import core from './core';

const mapStateToProps = (state) => {
    return {
        searchKey: state.reducer.searchKey,
        isSearching: state.reducer.isSearching,
        searchResults: state.reducer.searchResults,
        access_token: state.reducer.access_token,
        user: state.reducer.user,
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
        //can ignore error 'types' can only be used in a .ts file
        //as this is a known issue with Code's internal linter
        newSearch: (searchKey: string)=>dispatch(newSearch(searchKey)),
        getUserInfo: ()=>dispatch(getUserInfo()),
        beginSearch: ()=>dispatch(beginSearch()),
        resultsReturned: (results)=>dispatch(resultsReturned(results)),
        handleOnSearch: ()=>dispatch(getSearchResults()),
        handleOnLogin: ()=>applogin(),
        accessToken: (token)=>dispatch(accessToken(token))        
    }
  }

export const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(core);