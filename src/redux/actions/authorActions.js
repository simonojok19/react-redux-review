import * as authorApi from "../../api/authorApi";
import { LOAD_AUTHORS_SUCCESS } from "./actionTypes";

export function loadAuthorsSuccess(authors) {
  return { type: LOAD_AUTHORS_SUCCESS, authors };
}

export function loadCourses() {
  return (dispatch) => {
    return authorApi
      .getAuthors()
      .then((courses) => {
        dispatch(loadAuthorsSuccess(courses));
      })
      .catch((error) => {
        throw error;
      });
  };
}
