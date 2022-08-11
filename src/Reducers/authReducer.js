export const userAuthReducer = (state = {}, action) => {
  switch (action.type) {
    case "SUCCESS":
      return {
        userInfo: action.payload,
      };
    case "ERROR":
      return {
        error: action.payload,
      };
    case "SIGN_OUT":
      return {};

    default:
      return state;
  }
};
export const userDataReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case "FETCH_ALL_USERS_SUCCESS":
      return {
        users: action.payload,
      };
    case "ERROR_FETCH_USERS":
      return { error: action.payload };
    default:
      return state;
  }
};
