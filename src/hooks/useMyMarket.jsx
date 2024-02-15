import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API } from "../api";
import UseEncryptData from "./UseEncryptData";
import UseTokenGenerator from "./UseTokenGenerator";
import useContextState from "./useContextState";

const useMyMarket = () => {
  const { token, tokenLoading } = useContextState();
  const { data: myMarket, refetch: refetchMyMarket } = useQuery({
    queryKey: ["myMarket"],
    enabled: !tokenLoading,
    queryFn: async () => {
      const generatedToken = UseTokenGenerator();
      const encryptedData = UseEncryptData(generatedToken);
      const res = await axios.post(API.myMarket, encryptedData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = res?.data?.result;
      return data;
    },
  });
  return { myMarket, refetchMyMarket };
};

export default useMyMarket;
