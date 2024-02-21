import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useContextState from "./useContextState";
import { API } from "../api";

const useCasino = () => {
  const { token } = useContextState();
  const {
    data,
    refetch: refetchLiveCasino,
    isLoading,
  } = useQuery({
    queryKey: ["casinoWolf"],
    queryFn: async () => {
      const res = await axios.post(
        API.slotWolf,
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

export default useCasino;
