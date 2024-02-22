import { createContext, useEffect, useState } from "react";
import { API, Settings } from "../api";
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
  const [logo, setLogo] = useState("");

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

  useEffect(() => {
    /* Dynamically append  theme css  */
    const logo = `${API.assets}/${Settings.siteUrl}/logo.png`;
    setLogo(logo);
    /* Dynamically append  favicon  */
    const FavIconLink = document.createElement("link");
    FavIconLink.rel = "icon";
    FavIconLink.type = "image/png";
    FavIconLink.href = `${API.assets}/${Settings.siteUrl}/favicon.png`;
    document.head.appendChild(FavIconLink);
    /* Site title */
    document.title = Settings.siteTitle;
  }, []);

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
    logo, setLogo
  };
  return (
    <StateContext.Provider value={stateInfo}>{children}</StateContext.Provider>
  );
};

export default StateProvider;
