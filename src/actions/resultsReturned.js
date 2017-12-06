import constants from './constants';

export default function resultsReturned(results) {
  return {
    type: constants.SEARCH_COMPLETED,
    results
  }
}