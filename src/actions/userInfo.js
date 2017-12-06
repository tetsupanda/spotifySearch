import constants from './constants';

export default function userInfo(user) {
  return {
    type: constants.SET_USER_DETAILS,
    user
  }
}