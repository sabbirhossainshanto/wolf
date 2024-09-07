import { useQuery } from "@tanstack/react-query";
import useContextState from "./useContextState";
import UseTokenGenerator from "./UseTokenGenerator";
import { API, Settings } from "../api";
import UseEncryptData from "./UseEncryptData";
import axios from "axios";

const useGetSocialLink = () => {
  const { token } = useContextState();

  /* get whats app link */
  const { data: socialLink } = useQuery({
    queryKey: ["whatsApp"],
    queryFn: async () => {
      /* random token function */
      const generatedToken = UseTokenGenerator();
      /* Encryption post data */
      const encryptedVideoData = UseEncryptData({
        site: Settings.siteUrl,
        token: generatedToken,
      });
      const res = await axios.post(API.whatsApp, encryptedVideoData, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      });
      console.log({res});
      const data = res.data;
      if (data?.success) {
        return data?.result;
      }
    },
    refetchOnWindowFocus:false
  });
  return { socialLink };
};

export default useGetSocialLink;
