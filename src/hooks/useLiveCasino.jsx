import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API } from "../api";
import useContextState from "./useContextState";

const useLiveCasino = (gameList, product) => {
  const { token, sportsType } = useContextState();
  const apiMapping = {
    "live-casino": API.liveCasinoWolf,
    casino: API.slotWolf,
    aura: API.auraWolf,
  };
  const {
    data,
    refetch: refetchLiveCasino,
    isLoading,
  } = useQuery({
    queryKey: ["liveCasinoWolf"],

    queryFn: async () => {
      const res = await axios.post(
        apiMapping[sportsType],
        {
          gameList,
          product,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const result = res?.data;
      return result;
    },
  });
  return { data, refetchLiveCasino, isLoading };
};

export default useLiveCasino;
