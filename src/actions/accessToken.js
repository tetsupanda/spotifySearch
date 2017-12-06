import constants from './constants';

export default function accessToken(token) {
  return {
    type: constants.SET_ACCESS_TOKEN,
    token
  }
}