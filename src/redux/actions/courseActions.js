import * as courseApi from "../../api/courseApi";
import { LOAD_COURSES_SUCCESS } from "./actionTypes";

export function loadCoursesSuccess(courses) {
  return { type: LOAD_COURSES_SUCCESS, courses };
}

export function loadCourses() {
  return (dispatch) => {
    return courseApi
      .getCourses()
      .then((courses) => {
        dispatch(loadCoursesSuccess(courses));
      })
      .catch((error) => {
        throw error;
      });
  };
}
