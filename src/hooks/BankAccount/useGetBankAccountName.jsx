import { useQuery } from "@tanstack/react-query";
import useContextState from "../useContextState";
import { API } from "../../api";
import { AxiosSecure } from "../../lib/AxiosSecure";

const useGetBankAccountName = (payload) => {
  const { tokenLoading } = useContextState();
  const { data: bankData, refetch: refetchBankData } = useQuery({
    queryKey: ["bankAccountName"],
    enabled: !tokenLoading,
    queryFn: async () => {
      const res = await AxiosSecure.post(API.bankAccount, payload);
      const data = res?.data;

      if (data?.success) {
        return data?.result;
      }
    },
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
  return { bankData, refetchBankData };
};

export default useGetBankAccountName;
