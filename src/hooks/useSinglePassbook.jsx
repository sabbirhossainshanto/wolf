import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API } from "../api";
import UseTokenGenerator from "./UseTokenGenerator";
import UseEncryptData from "./UseEncryptData";
import useContextState from "./useContextState";

const useSinglePassbook = (marketId) => {
  const { token, tokenLoading } = useContextState();
  const { data: singlePassbook } = useQuery({
    queryKey: ["singlePassbook"],
    enabled: !tokenLoading,
    queryFn: async () => {
      const generatedToken = UseTokenGenerator();
      const encryptedData = UseEncryptData(generatedToken);
      const res = await axios.post(
        `${API.settledBets}/${marketId}`,
        encryptedData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = res.data;
      if (data?.success) {
        return data?.result;
      }
    },
  });
  return { singlePassbook };
};

export default useSinglePassbook;
