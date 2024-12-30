import { useQuery } from "@tanstack/react-query";
import { API } from "../api";
import { AxiosSecure } from "../lib/AxiosSecure";

/* My market api */
const useMyMarket = () => {
  const { data: myMarket, refetch: refetchMyMarket } = useQuery({
    queryKey: ["myMarket"],
    queryFn: async () => {
      const res = await AxiosSecure.post(API.myMarket);
      const data = res?.data?.result;
      return data;
    },
  });
  return { myMarket, refetchMyMarket };
};

export default useMyMarket;
