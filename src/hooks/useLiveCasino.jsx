import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { API, Settings } from "../api";
import useLanguage from "./useLanguage";
const useLiveCasino = () => {
  const { language } = useLanguage();
  const {
    data,
    refetch: refetchLiveCasino,
    isLoading,
  } = useQuery({
    queryKey: ["liveCasinoWolf"],

    queryFn: async () => {
      let payload = {
        gameList: "All",
        product: "All",
        isHome: true,
      };
      if (Settings.language) {
        payload.language = language;
      }
      const res = await axios.post(API.liveCasinoWolf, payload);
      const result = res?.data;
      if (result?.status === "success") {
        return result?.data;
      }
    },
    refetchOnWindowFocus: false,
  });
  return { data, refetchLiveCasino, isLoading };
};

export default useLiveCasino;
