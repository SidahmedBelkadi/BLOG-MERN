import { createContext, useEffect, useReducer } from "react";
import userReducer from "./Reducer";

// Create the context with the initial state
const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isFetching: false,
  error: false,
};
export const UserContext = createContext(INITIAL_STATE);

// Context Provider
export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);
  const { user, isFetching, error } = state;

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <UserContext.Provider value={{ user, isFetching, error, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
