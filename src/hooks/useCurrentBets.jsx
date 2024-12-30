import { useQuery } from "@tanstack/react-query";
import { API } from "../api";
import { AxiosSecure } from "../lib/AxiosSecure";

const useCurrentBets = (eventId) => {
  const { data: myBets = [], refetch: refetchCurrentBets } = useQuery({
    queryKey: ["currentBets"],
    queryFn: async () => {
      try {
        const { data } = await AxiosSecure.post(
          `${API.currentBets}/${eventId || "sports"}`
        );

        if (data.success) {
          return data.result;
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  });
  return { myBets, refetchCurrentBets };
};

export default useCurrentBets;
