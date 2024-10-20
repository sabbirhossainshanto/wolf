import { useQuery } from "@tanstack/react-query";
import UseTokenGenerator from "./UseTokenGenerator";
import { API, Settings } from "../api";
import UseEncryptData from "./UseEncryptData";
import axios from "axios";

const useGetSocialLink = () => {
  const token = localStorage.getItem("token");

  /* get whats app link */
  const { data: socialLink, refetch: refetchSocialLinks } = useQuery({
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
          Authorization: `Bearer ${token}`,
        },
      });

      const data = res.data;
      if (data?.success) {
        return data?.result;
      }
    },
    refetchOnWindowFocus: false,
  });
  return { socialLink, refetchSocialLinks };
};

export default useGetSocialLink;
