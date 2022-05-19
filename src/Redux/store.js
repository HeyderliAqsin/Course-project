import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { getByIdCourseReducers, getDiscountCourses, getPopularCourseReducer } from "./Reducers/Coursereducer";
import { getCategoryReducer } from "./Reducers/Categoryreducer";
import { getInstructorsReducer } from "./Reducers/Instructorreducer";


const reducer = combineReducers({
  coursePopular: getPopularCourseReducer,
  courseDiscount: getDiscountCourses,
  categories: getCategoryReducer,
  instructors:getInstructorsReducer,
  IdCourse:getByIdCourseReducers
});

const initialState = {
  // returned: []
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
