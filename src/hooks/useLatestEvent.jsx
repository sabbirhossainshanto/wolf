import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API } from "../api";
import UseTokenGenerator from "./UseTokenGenerator";
import UseEncryptData from "./UseEncryptData";
import useContextState from "./useContextState";

const useLatestEvent = () => {
  const { token } = useContextState();
  const { data: latestEvents } = useQuery({
    queryKey: ["latestEvent"],
    queryFn: async () => {
      const generatedToken = UseTokenGenerator();
      const payload = {
        type: "cup",
        token: generatedToken,
      };
      const encryptedData = UseEncryptData(payload);

      const res = await axios.post(API.latestEvents, encryptedData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = res.data;
      if (data?.success) {
        return data?.result;
      }
    },
  });
  return { latestEvents };
};

export default useLatestEvent;
