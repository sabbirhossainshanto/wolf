import { useQuery } from "@tanstack/react-query";
import useContextState from "./useContextState";
import axios from "axios";
import { API } from "../api";

const useGameDetails = (eventTypeId, eventId) => {
  const { token, tokenLoading } = useContextState();
  const { data,refetch:refetchGame } = useQuery({
    queryKey: ["gameDetails"],
    enabled: !tokenLoading,
    queryFn: async () => {
      const res = await axios.get(`${API.odds}/${eventTypeId}/${eventId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = res.data;
      if (data.success) {
        return data?.result;
      }
    },
    refetchInterval: API.interval,
    
  });
  return { data,refetchGame };
};

export default useGameDetails;
