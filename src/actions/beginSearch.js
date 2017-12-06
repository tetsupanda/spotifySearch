import constants from './constants';

export default function beginSearch() {
  return {
    type: constants.Search_Started
  }
}