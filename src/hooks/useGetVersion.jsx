import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API, Settings } from "../api";
import UseTokenGenerator from "./UseTokenGenerator";
import UseEncryptData from "./UseEncryptData";
const useGetVersion = () => {
  const { data: version, refetch: refetchVersion } = useQuery({
    queryKey: ["version"],
    queryFn: async () => {
      const generatedToken = UseTokenGenerator();
      const postData = {
        site: Settings.siteUrl,
        token: generatedToken,
      };
      const encryptedData = UseEncryptData(postData);
      const res = await axios.post(API.siteSetting, encryptedData);
      const data = res?.data;
      if (data?.success) {
        return data?.result;
      }
    },
  });
  return { version, refetchVersion };
};

export default useGetVersion;
