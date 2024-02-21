import axios from "axios";
import { API, Settings } from "../api";
import UseTokenGenerator from "../hooks/UseTokenGenerator";
import UseEncryptData from "../hooks/UseEncryptData";


const handleOpenWarningModal = async (
  sportsType,
  id,
  token,
  setGameId,
  setShowWarning
) => {
  if (Settings.casinoCurrency !== "AED" || sportsType === "aura") {
    const generatedToken = UseTokenGenerator();
    const encryptedData = UseEncryptData({
      gameId: id?.toString(),
      token: generatedToken,
      isHome: false,
    });

    try {
      const res = await axios.post(API.liveCasinoIFrame, encryptedData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = res?.data;
      window.open(data?.gameUrl, "_blank");
    } catch (error) {
      console.error("Error opening casino game:", error);
      // Handle error as needed
    }
  } else {
    setGameId("");
    setGameId(id);
    setShowWarning(true);
  }
};

export default handleOpenWarningModal;
