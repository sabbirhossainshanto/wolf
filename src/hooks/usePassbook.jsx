import { useQuery } from "@tanstack/react-query";
import UseTokenGenerator from "./UseTokenGenerator";
import UseEncryptData from "./UseEncryptData";
import useContextState from "./useContextState";
import axios from "axios";
import { API } from "../api";
/* passbook api */
const usePassbook = () => {
  /* from date 7 days earlier */
  const fromDate = new Date(new Date().setDate(new Date().getDate() - 7))
    .toISOString()
    .split("T")[0];
    /* current date */
  const toDate = new Date().toISOString().split("T")[0];
  const { token, tokenLoading } = useContextState();
  const { data: passbook } = useQuery({
    queryKey: ["passbook"],
    /* enable when token loading */
    enabled: !tokenLoading,
    queryFn: async () => {
      const generatedToken = UseTokenGenerator();
      const encryptedData = UseEncryptData({
        from: fromDate,
        to: toDate,
        type: "GR",
        token: generatedToken,
      });
      const res = await axios.post(API.accountStatement, encryptedData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = res.data;
      if(data?.success){
        return data?.result
      }
    },
  });
  return { passbook };
};

export default usePassbook;
