import { useQuery } from "@tanstack/react-query";
import { API } from "../api";
import UseEncryptData from "./UseEncryptData";
import UseTokenGenerator from "./UseTokenGenerator";
import useContextState from "./useContextState";

const useCurrentBets = (eventId) => {
  const { token, tokenLoading } = useContextState();
  /* Fetch Current Bets */
  const { data: myBets = [], refetch: refetchCurrentBets } = useQuery({
    queryKey: ["currentBets"],
    /* Enable when  token available */
    enabled: !tokenLoading,
    queryFn: async () => {
      try {
        const generatedToken = UseTokenGenerator();
        const encryptedData = UseEncryptData(generatedToken);
        const response = await fetch(
          `${API.currentBets}/${eventId || "sports"}`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(encryptedData),
          }
        );

        const data = await response.json();

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
