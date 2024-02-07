import { createContext, useState } from "react";

export const StateContext = createContext(null);

const StateProvider = ({ children }) => {
  const [sportsType, setSportsType] = useState(4);

  const stateInfo = {
    sportsType,
    setSportsType,
  };
  return (
    <StateContext.Provider value={stateInfo}>{children}</StateContext.Provider>
  );
};

export default StateProvider;
