import { useQuery } from "@tanstack/react-query";
import UseTokenGenerator from "./UseTokenGenerator";
import UseEncryptData from "./UseEncryptData";
import axios from "axios";
import { API } from "../api";
import useContextState from "./useContextState";

const useWithdrawStatement = () => {
  const fromDate = new Date(new Date().setDate(new Date().getDate() - 7))
    .toISOString()
    .split("T")[0];
  const toDate = new Date().toISOString().split("T")[0];
  const { token, tokenLoading } = useContextState();

  const { data: withdrawStatement = [] } = useQuery({
    queryKey: ["withdraw-statement"],
    enabled: !tokenLoading,
    queryFn: async () => {
      const generatedToken = UseTokenGenerator();
      /* Encrypt post data */
      const encryptedData = UseEncryptData({
        from: fromDate,
        to: toDate,
        type: "WITHDRAW",
        status: "ALL",
        token: generatedToken,
      });
      const res = await axios.post(API.accountStatement, encryptedData, {
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
  return { withdrawStatement };
};

export default useWithdrawStatement;