import * as courseApi from "../../api/courseApi";

export const COURSE_ACTION = {
  CREATE_COURSE: "CREATE_COURSE",
  LOAD_COURSES_SUCCESS: "LOAD_COURSES_SUCCESS",
};

export function createCourse(courses) {
  return { type: COURSE_ACTION.CREATE_COURSE, courses };
}

export function loadCoursesSuccess(courses) {
  return { type: COURSE_ACTION.LOAD_COURSES_SUCCESS, courses };
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
