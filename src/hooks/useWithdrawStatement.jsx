import { useQuery } from "@tanstack/react-query";
import { API, Settings } from "../api";
import useLanguage from "./useLanguage";
import { AxiosSecure } from "../lib/AxiosSecure";

/* withdraw api */
const useWithdrawStatement = () => {
  const { language } = useLanguage();
  /* from date 7 days earlier */
  const fromDate = new Date(new Date().setDate(new Date().getDate() - 7))
    .toISOString()
    .split("T")[0];
  /* current date */
  const toDate = new Date().toISOString().split("T")[0];

  const { data: withdrawStatement = [] } = useQuery({
    queryKey: ["withdraw-statement"],
    queryFn: async () => {
      let payload = {
        from: fromDate,
        to: toDate,
        type: "WITHDRAW",
        status: "ALL",
      };
      if (Settings.language) {
        payload.language = language;
      }
      const res = await AxiosSecure.post(API.accountStatement, payload);
      const data = res?.data;

      if (data?.success) {
        return data?.result;
      }
    },
  });
  return { withdrawStatement };
};

export default useWithdrawStatement;
