import initialState from "./initialState";
import { BEGIN_API_CALL } from "../actions/actionTypes";

// function actionTypeEndsInSuccess(type) {
//   return type.substring(type.length - 8) === "_SUCCESS";
// }

export default function apiStatusReducer(
  state = initialState.apiCallsInProgress,
  action
) {
  if (action.type === BEGIN_API_CALL) {
    return state + 1;
  } else if (action.type.substring(action.type.length - 8) === "_SUCCESS") {
    return state - 1;
  }
  return state;
}
