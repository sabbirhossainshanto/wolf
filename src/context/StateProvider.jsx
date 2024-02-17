import { createContext, useEffect, useState } from "react";
export const StateContext = createContext(null);

const StateProvider = ({ children }) => {
  const [sportsType, setSportsType] = useState(4);
  const [showSidebar, setShowSidebar] = useState(false);
  const [token, setToken] = useState("");
  const [showLogin, setShowLogin] = useState(false);
  const [getToken, setGetToken] = useState(false);
  const [tokenLoading, setTokenLoading] = useState(true);
  const [showEditStake, setShowEditStake] = useState(false);
  const [placeBetValues, setPlaceBetValues] = useState({});
  const [isCheckedBonusToken, setIsCheckedBonusToken] = useState(false);

  useEffect(() => {
    const getToken = localStorage.getItem("token");
    const getBonusToken = localStorage.getItem("bonusToken");
    const getCheckedBonusToken = localStorage.getItem("checkedBonusToken");
    if (getCheckedBonusToken && getBonusToken) {
      setToken(getBonusToken);
      setIsCheckedBonusToken(true);
    } else {
      setToken(getToken);
      setIsCheckedBonusToken(false);
    }

    if (token && (getToken === token || getBonusToken === token)) {
      
      setTokenLoading(false);
    }
  }, [getToken, token]);

  const stateInfo = {
    sportsType,
    setSportsType,
    showSidebar,
    setShowSidebar,
    showLogin,
    setShowLogin,
    token,
    setToken,
    getToken,
    setGetToken,
    tokenLoading,
    setTokenLoading,
    showEditStake,
    setShowEditStake,
    placeBetValues,
    setPlaceBetValues,
    isCheckedBonusToken,
    setIsCheckedBonusToken,
  };
  return (
    <StateContext.Provider value={stateInfo}>{children}</StateContext.Provider>
  );
};

export default StateProvider;
