import axios from "axios";
import UseEncryptData from "./UseEncryptData";
import UseTokenGenerator from "./UseTokenGenerator";

import { API } from "../api";
import useContextState from "./useContextState";

const UseLiveSlotFantasyNewTab = async (id) => {
  const { token } = useContextState();
  const generatedToken = UseTokenGenerator();
  const encryptedData = UseEncryptData({
    gameId: id?.toString(),
    token: generatedToken,
  });

  const res = await axios.post(API.liveCasinoIFrame, encryptedData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const data = res?.data;
  /* Open live casino in new tab */
  window.open(data?.gameUrl, "_blank");
};

export default UseLiveSlotFantasyNewTab;
