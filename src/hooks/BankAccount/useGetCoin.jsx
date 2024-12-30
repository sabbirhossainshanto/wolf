import { useQuery } from "@tanstack/react-query";
import { API } from "../../api";
import { AxiosSecure } from "../../lib/AxiosSecure";

const useGetCoin = (payload) => {
  const { data: depositData } = useQuery({
    queryKey: ["coin"],
    queryFn: async () => {
      const res = await AxiosSecure.post(API.bankAccount, payload);
      const data = res?.data;

      if (data?.success) {
        return data?.result;
      }
    },
  });
  return { depositData };
};

export default useGetCoin;
