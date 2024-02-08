import { createContext, useState } from "react";

export const StateContext = createContext(null);

const StateProvider = ({ children }) => {
  const [sportsType, setSportsType] = useState(4);
  const [showSidebar,setShowSidebar] = useState(false)

  const stateInfo = {
    sportsType,
    setSportsType,
    showSidebar,setShowSidebar
  };
  return (
    <StateContext.Provider value={stateInfo}>{children}</StateContext.Provider>
  );
};

export default StateProvider;
