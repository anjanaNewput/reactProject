import { combineReducers } from 'redux';
import { ADD_TODO } from '../actions/actions.js';

function user(state, action) {
    console.log(action);
   switch (action.type) {
	
      case ADD_TODO:
         return {
            users: action.userList,
         }
			
      default:
      return state
   }
}

function users(state = [], action) {
   switch (action.type) {
      case ADD_TODO:
         return [
            ...state,
            user(undefined, action)
         ]
			
      default:
      return state;
   }
}

const reducers = combineReducers({
   users: users
})

export default reducers;