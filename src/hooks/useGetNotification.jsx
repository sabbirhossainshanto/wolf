import { useQuery } from "@tanstack/react-query";
import { API, Settings } from "../api";
import UseTokenGenerator from "./UseTokenGenerator";
import UseEncryptData from "./UseEncryptData";
import axios from "axios";
import useContextState from "./useContextState";

const useGetNotification = () => {
  const { token } = useContextState();
  const {
    data: notification = [],
    refetch: refetchNotification,
    isFetching: isFetchingNotification,
    isFetched,
  } = useQuery({
    queryKey: ["notifications"],
    queryFn: async () => {
      try {
        const generatedToken = UseTokenGenerator();
        const encryptedData = UseEncryptData({
          token: generatedToken,
          site: Settings.siteUrl,
        });
        const { data } = await axios.post(
          `${API.notification}`,
          encryptedData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (data.success) {
          return data?.result;
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    gcTime: 0,
    refetchInterval: 60000,
  });

  return {
    notification,
    refetchNotification,
    isFetchingNotification,
    isFetched,
  };
};

export default useGetNotification;
