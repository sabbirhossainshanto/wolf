import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API } from "../api";
const useGetVersion = () => {
  const { data: version, refetch: refetchVersion } = useQuery({
    queryKey: ["version"],
    queryFn: async () => {
      const res = await axios.post(API.siteSetting);
      const data = res?.data;
      if (data?.success) {
        return data?.result;
      }
    },
    refetchOnWindowFocus: false,
  });
  return { version, refetchVersion };
};

export default useGetVersion;
