import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useContextState from "./useContextState";
import { API, Settings } from "../api";
import UseTokenGenerator from "./UseTokenGenerator";
import UseEncryptData from "./UseEncryptData";
/* Get casino */
const useBannerImage = () => {
  const { token } = useContextState();
  const { data: bannerImage } = useQuery({
    queryKey: ["bannerImage"],
    queryFn: async () => {
      const generatedToken = UseTokenGenerator();
      const postData = {
        site: Settings.siteUrl,
        token: generatedToken,
      };
      const encryptedData = UseEncryptData(postData);
      const res = await axios.post(API.banner, encryptedData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = res?.data;
      if (data?.success) {
        return data?.result?.homepage;
      }
    },
  });
  return { bannerImage };
};

export default useBannerImage;
