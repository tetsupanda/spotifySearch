import constants from './constants';

export default function newSearch(searchKey) {
  return {
    type: constants.CHANGE_SEARCH_KEY,
    searchKey
  }
}