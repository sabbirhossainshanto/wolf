import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useContextState from "./useContextState";
import { API } from "../api";

/* go casino api(aura) */
const useGoCasino = () => {
  const { token } = useContextState();
  const {
    data,
    refetch: refetchLiveCasino,
    isLoading,
  } = useQuery({
    queryKey: ["goCasinoWolf"],

    queryFn: async () => {
      const res = await axios.post(
        API.auraWolf,
        {
          gameList: "All",
          product: "All",
          isHome: true,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const result = res?.data;
      if (result?.status === "success") {
        return result?.data;
      }
    },
  });
  return { data, refetchLiveCasino, isLoading };
};

export default useGoCasino;
