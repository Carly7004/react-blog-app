import { createContext, useEffect, useReducer } from "react";
import LoginReducer from "./reducer";

const INITIALSTATE = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  isFetching: false,
  error: false,
};

export const Context = createContext(INITIALSTATE);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(LoginReducer, INITIALSTATE);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(state.user))
  }, [state.user])

  return (
    <Context.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
};
