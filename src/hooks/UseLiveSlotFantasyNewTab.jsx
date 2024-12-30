import { API } from "../api";
import { AxiosSecure } from "../lib/AxiosSecure";
/* open casino iframe in new tab */
const UseLiveSlotFantasyNewTab = async (id) => {
  const res = await AxiosSecure.post(API.liveCasinoIFrame, {
    gameId: id?.toString(),
  });
  const data = res?.data;
  /* Open live casino in new tab */
  window.open(data?.gameUrl, "_blank");
};

export default UseLiveSlotFantasyNewTab;
