import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API, Settings } from "../api";
import UseTokenGenerator from "./UseTokenGenerator";
import useContextState from "./useContextState";
import UseEncryptData from "./UseEncryptData";

const useBankAccount = (payload) => {
  const { token, tokenLoading } = useContextState();
  const {
    data: bankData,
    refetch: refetchBankData,
    isFetched,
  } = useQuery({
    queryKey: ["bankAccount"],
    enabled: !tokenLoading,
    queryFn: async () => {
      const generatedToken = UseTokenGenerator();
      const bankData = {
        ...payload,
        token: generatedToken,
        site: Settings.siteUrl,
      };
      const encryptedData = UseEncryptData(bankData);
      const res = await axios.post(API.bankAccount, encryptedData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = res?.data;

      if (data?.success) {
        return data?.result;
      }
    },
    gcTime: 0,
  });
  return { bankData, refetchBankData, isFetched };
};

export default useBankAccount;
