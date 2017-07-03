import {combineReducers} from "redux";
import {LOG_IN, LOG_OUT} from "../actions";

function userAction(state = false, action) {
  switch (action.type) {
	  case "LOG_IN":
      return { status: true, data:action.data};
    break;
    case "LOG_OUT":
    console.log('log out reducers');
      return false;
    break;
		default:
    return state;
  }
  return state;
}

const allReducers = combineReducers({
  userAction
})

export default allReducers;