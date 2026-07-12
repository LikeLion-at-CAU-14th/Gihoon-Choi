import { createContext, useContext, useReducer } from "react";

const UserInfoContext = createContext();

const initialState = {
  name: "",
  email: "",
  birth: "",
  gender: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export const UserInfoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserInfoContext.Provider value={{ state, dispatch }}>
      {children}
    </UserInfoContext.Provider>
  );
};

export const useUserInfo = () => useContext(UserInfoContext);