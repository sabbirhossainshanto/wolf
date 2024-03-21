import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API } from "../api";
import UseTokenGenerator from "./UseTokenGenerator";
import useContextState from "./useContextState";

const useBankAccount = (payload) => {
  const { token, tokenLoading } = useContextState();
  const { data: bankData, refetch: refetchBankData } = useQuery({
    queryKey: ["bankAccount"],
    enabled: !tokenLoading,
    queryFn: async () => {
      const generatedToken = UseTokenGenerator();
      const bankData = {
        ...payload,
        token: generatedToken,
      };
      //   const encryptedData = UseEncryptData(bankData);
      const res = await axios.post(API.bankAccount, bankData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = res?.data;

      if (data?.success) {
        return data?.result;
      }
    },
    refetchOnMount:false,
    refetchOnWindowFocus:false
  });
  return { bankData, refetchBankData };
};

export default useBankAccount;
