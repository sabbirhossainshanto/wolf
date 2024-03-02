import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useContextState from "../useContextState";
import UseTokenGenerator from "../UseTokenGenerator";
import { API } from "../../api";

const useGetBankAccountName = (payload) => {
  const { token, tokenLoading } = useContextState();
  const { data: bankData, refetch: refetchBankData } = useQuery({
    queryKey: ["bankAccountName"],
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
  });
  return { bankData, refetchBankData };
};

export default useGetBankAccountName;
