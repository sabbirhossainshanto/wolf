import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import UseEncryptData from "./UseEncryptData";
import UseTokenGenerator from "./UseTokenGenerator";
import useContextState from "./useContextState";
import { API } from "../api";
import { useEffect } from "react";
/* Balance api */
const useBalance = () => {
  const { token, setGetToken, tokenLoading } = useContextState();

  const { data: balanceData, refetch: refetchBalance } = useQuery({
    queryKey: ["balance"],
    enabled:!tokenLoading,
    queryFn: async () => {
      if (!token) {
        return;
      }
      const generatedToken = UseTokenGenerator();
      const encryptedData = UseEncryptData(generatedToken);
      const res = await axios.post(API.balance, encryptedData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res?.data?.success === false && token) {
        localStorage.clear();
        setGetToken((prev) => !prev);
      } else if (res?.data?.success && token) {
        const data = res.data?.result;
        return data;
      }
    },

    refetchInterval: 6000,
  });

  useEffect(() => {
    if (token) {
      refetchBalance();
    }
  }, [token, refetchBalance]);

  return { balanceData, refetchBalance };
};

export default useBalance;
