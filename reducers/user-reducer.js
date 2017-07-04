import { combineReducers } from 'redux';
import { USER_NAME } from '../actions/user-action.js';

function user(state = null, action) {
   switch (action.type) {
      case USER_NAME:
         return {
            username: action.username,
         };
			break;
      default:
      return state;
   }
}

const reducers = combineReducers({
   username:user
})
export default reducers;