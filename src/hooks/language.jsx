import { useQuery } from "@tanstack/react-query";
import UseEncryptData from "./UseEncryptData";
import UseTokenGenerator from "./UseTokenGenerator";
import { API } from "../api";
import { AxiosSecure } from "../lib/AxiosSecure";

export const useGetLanguage = () => {
  return useQuery({
    queryKey: ["language"],
    queryFn: async () => {
      const generatedToken = UseTokenGenerator();
      const encryptedData = UseEncryptData(generatedToken);
      const { data } = await AxiosSecure.get(API.language, encryptedData);
      return data;
    },
  });
};
