import React, { createContext, useState } from "react";

type UserType = {
  name: string;
  lastName: string;
  email: string;
};

type PropsUserContext = {
  state: UserType;
  setState: React.Dispatch<React.SetStateAction<UserType>>;
}


const DEFAULT_VALUE = {
  state: {
    name: "",
    lastName: "",
    email: "",
  },
  setState: () => { },
};

const UserContext = createContext<PropsUserContext>(DEFAULT_VALUE);


const UserContextProvider: React.FC = ({ children }) => {
  const [state, setState] = useState(DEFAULT_VALUE.state);

  return (
    <UserContext.Provider
      value={{
        state,
        setState,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};


export { UserContextProvider };
export default UserContext;