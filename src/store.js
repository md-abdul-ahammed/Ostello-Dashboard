import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  addLocationReducer,
  instituteDetailsReducer,
  institutesReducer,
} from "./reducers/InstituteReducer";
import { blogReducer } from "./reducers/blogReducer";

const reducer = combineReducers({
  institutes: institutesReducer,
  blogs: blogReducer,
  institute: instituteDetailsReducer,
  location: addLocationReducer,
});

let initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
