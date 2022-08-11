import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { userAuthReducer, userDataReducer } from "./Reducers/authReducer";
const initialState = {
  userSignIn: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },
  allUsers: {
    users: localStorage.getItem("allUsers")
      ? JSON.parse(localStorage.getItem("allUsers"))
      : [],
  },
};
const reducer = combineReducers({
  userSignIn: userAuthReducer,
  allUsers: userDataReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;
