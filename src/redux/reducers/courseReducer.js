import { COURSE_ACTION } from "../actions/courseActions";

export default function courseReducer(state = [], action) {
  switch (action.type) {
    case COURSE_ACTION.CREATE_COURSE: {
      return [...state, { ...action.course }];
    }
    case COURSE_ACTION.LOAD_COURSES_SUCCESS: {
      return action.courses;
    }
    default: {
      return state;
    }
  }
}
