import { combineReducers } from 'redux';
import { USER, URL } from '../actions/user-action.js';

function user(state = null, action) {
  switch (action.type) {
    case USER:
      return {
        user: action.user
      };
		break;
    default:
    return state;
  }
}
function getUrl(state = null, action) {
  switch (action.type) {
    case URL:
      return {
        url: action.url
      };
		break;
    default:
    return state;
  }
}

const reducers = combineReducers({
  user: user,
  profileImg: getUrl
})
export default reducers;