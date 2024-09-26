import React, { createContext, useReducer } from "react";

const SignupContext = createContext();

const initialState = {
  users: [],
};
const reducerFunc = (prevState, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...prevState,
        users: [
          ...prevState.users,
          { email: action.payload.email, password: action.payload.password },
        ],
      };

    default:
      break;
  }
};

export const SignupProvider = ({ children }) => {
  const [signState, signDispatch] = useReducer(reducerFunc, initialState);

  function signup(email, password) {
    signDispatch({
      type: "ADD",
      payload: {
        email,
        password,
      },
    });
  }
  console.log(signState);
  return (
    <SignupContext.Provider value={{ signup, signState }}>
      {children}
    </SignupContext.Provider>
  );
};

export default SignupContext;
