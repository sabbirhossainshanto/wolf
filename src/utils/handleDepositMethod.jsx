import axios from "axios";
import { API, Settings } from "../api";
import UseTokenGenerator from "../hooks/UseTokenGenerator";
import UseEncryptData from "../hooks/UseEncryptData";

const handleDepositMethod = (token) => {
  const handleDeposit = async () => {
    const generatedToken = UseTokenGenerator();
    let bankData = {
      type: "depositMethods",
      token: generatedToken,
    };
    if (Settings.language) {
      bankData.language = localStorage.getItem("language") || "english";
    }
    const encryptedData = UseEncryptData(bankData);
    const res = await axios.post(API.bankAccount, encryptedData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const result = res?.data;
    if (result?.success) {
      return result;
    }
  };
  return handleDeposit;
};

export default handleDepositMethod;
