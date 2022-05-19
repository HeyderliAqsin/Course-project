import {
  GET_BY_ID_COURSE,
  GET_DISCOUNT_COURSES,
  GET_POPULAR_COURSES,
} from "../Constant/CourseConstants";

export const getPopularCourseReducer = (state = { courses: [] }, action) => {
  switch (action.type) {
    case GET_POPULAR_COURSES:
      if (action.payload) {
        return {
          ...state,
          courses: action.payload,
        };
      }
      break;
    default:
      return state;
  }
};

export const getDiscountCourses = (state = { courses: [] }, action) => {
  switch (action.type) {
    case GET_DISCOUNT_COURSES:
      if (action.payload) {
        return {
          ...state,
          courses: action.payload,
        };
      }
      break;
    default:
      return state;
  }
};

export const getByIdCourseReducers = (state = { courseByIdData:null }, action) => {
  switch (action.type) {
    case GET_BY_ID_COURSE:
      if (action.payload) {
        return {
          ...state,
          courseByIdData: action.payload,
        };
      }
      break;
    default:
      return state;
  }
};
