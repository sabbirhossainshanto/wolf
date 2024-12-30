import { useQuery } from "@tanstack/react-query";
import { API } from "../api";
import moment from "moment";
import { AxiosSecure } from "../lib/AxiosSecure";

const useGetReferralStatement = (
  from_date,
  to_date,
  fetchData,
  setFetchData
) => {
  const { data, refetch, isLoading } = useQuery({
    queryKey: ["ReferralStatement"],
    enabled: fetchData,
    queryFn: async () => {
      const payload = {
        type: "referral_statement",
        from_date: moment(from_date).format("YYYY-MM-DD"),
        to_date: moment(to_date).format("YYYY-MM-DD"),
      };

      const res = await AxiosSecure.post(API.index, payload);
      const result = res?.data;
      setFetchData(false);
      if (result?.success) {
        return result?.result;
      }
    },
    gcTime: 0,
  });
  return { data, refetch, isLoading };
};

export default useGetReferralStatement;
