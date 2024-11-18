import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API, Settings } from "../api";
import UseTokenGenerator from "./UseTokenGenerator";
import UseEncryptData from "./UseEncryptData";
import useContextState from "./useContextState";

const useGetIndex = () => {
  const { token } = useContextState();
  const { data, refetch, isLoading } = useQuery({
    queryKey: ["index"],

    queryFn: async () => {
      const generatedToken = UseTokenGenerator();
      const encryptedPostData = UseEncryptData({
        site: Settings.siteUrl,
        token: generatedToken,
        type: "get_referral_code",
      });

      const res = await axios.post(API.index, encryptedPostData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const result = res?.data;
      if (result?.success) {
        return result?.result;
      }
    },
    refetchOnWindowFocus: false,
  });
  return { data, refetch, isLoading };
};

export default useGetIndex;
