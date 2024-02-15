import { useQuery } from "@tanstack/react-query";
import useContextState from "./useContextState";
import UseTokenGenerator from "./UseTokenGenerator";
import UseEncryptData from "./UseEncryptData";
import axios from "axios";
import { API } from "../api";

const useExposer = (eventId) => {
  const { token, tokenLoading } = useContextState();
  const { data: exposer = [], refetch: refetchExposure } = useQuery({
    queryKey: ["exposure"],
    enabled: !tokenLoading,
    queryFn: async () => {
      const generatedToken = UseTokenGenerator();
      const encryptedData = UseEncryptData(generatedToken);
      const res = await axios.post(
        `${API.exposure}/${eventId}`,
        encryptedData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = res.data;

      if (data.success) {
        return data.result;
      }
    },
  });
  return { exposer, refetchExposure };
};

export default useExposer;
