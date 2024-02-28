import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API } from "../api";
import UseTokenGenerator from "./UseTokenGenerator";
import useContextState from "./useContextState";

const useBankAccount = () => {
  const { token } = useContextState();
  const { data: bankData, isLoading } = useQuery({
    queryKey: ["bankAccount"],
    queryFn: async () => {
      const generatedToken = UseTokenGenerator();
      const bankData = {
        type: "getBankAccounts",
        status: 1,
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
  });
  return { bankData, isLoading };
};

export default useBankAccount;
