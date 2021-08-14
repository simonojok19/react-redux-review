export const COURSE_ACTION = {
  CREATE_COURSE: "CREATE_COURSE",
};

export function createCourse(course) {
  return { type: COURSE_ACTION.CREATE_COURSE, course };
}
