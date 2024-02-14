import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import UseEncryptData from "./UseEncryptData";
import UseTokenGenerator from "./UseTokenGenerator";
import useContextState from "./useContextState";
import { API } from "../api";
import { useEffect } from "react";

const useBonusBalance = () => {
  const { setGetToken } = useContextState();
  const bonusToken = localStorage.getItem("bonusToken");
  const { data: bonusBalanceData, refetch: bonusRefetchBalance } = useQuery({
    queryKey: ["bonusBalance"],
    queryFn: async () => {
      const generatedToken = UseTokenGenerator();
      const encryptedData = UseEncryptData(generatedToken);
      const res = await axios.post(API.balance, encryptedData, {
        headers: {
          Authorization: `Bearer ${bonusToken}`,
        },
      });
      if (res?.data?.success === false && bonusToken) {
        // localStorage.clear();
        setGetToken((prev) => !prev);
      } else if (res?.data?.success && bonusToken) {
        const data = res.data?.result;
        return data;
      }
    },

    refetchInterval: 6000,
  });

  useEffect(() => {
    if (bonusToken) {
      bonusRefetchBalance();
    }
  }, [bonusToken, bonusRefetchBalance]);

  return { bonusBalanceData, bonusRefetchBalance };
};

export default useBonusBalance;
