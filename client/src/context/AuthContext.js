import { Children, createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user: null,
  error: null,
  isFetching: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = () => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  return (
    <AuthContextProvider
      value={{
        user: state.user,
        error: state.error,
        isFetching: state.isFetching,
        dispatch,
      }}
    >
      {Children}
    </AuthContextProvider>
  );
};
