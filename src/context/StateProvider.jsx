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
  const [bonusToken, setBonusToken] = useState(false);

  useEffect(() => {
    const getToken = localStorage.getItem("token");
    const getBonusToken = localStorage.getItem("bonusToken");
    bonusToken ? setToken(getBonusToken) : setToken(getToken);
    if (getToken === token || getBonusToken === token) {
      setTokenLoading(false);
    }
  }, [getToken, bonusToken, token]);

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
    bonusToken,
    setBonusToken,
  };
  return (
    <StateContext.Provider value={stateInfo}>{children}</StateContext.Provider>
  );
};

export default StateProvider;
