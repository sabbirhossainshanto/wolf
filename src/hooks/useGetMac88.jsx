import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API, Settings } from "../api";
import useLanguage from "./useLanguage";

const useGetMac88 = () => {
  const { language } = useLanguage();
  const { data, refetch, isLoading } = useQuery({
    queryKey: ["mac88"],

    queryFn: async () => {
      let payload = {
        isHome: false,
      };
      if (Settings.language) {
        payload.language = language;
      }
      const res = await axios.post(API.mac88, payload);
      const result = res?.data;
      if (result?.success) {
        return result?.data;
      }
    },
    refetchOnWindowFocus: false,
  });
  return { data, refetch, isLoading };
};

export default useGetMac88;
