const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        error: null,
        isFetching: true,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        error: action.payload,
        isFetching: false,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        error: null,
        isFetching: false,
      };
  }
};
