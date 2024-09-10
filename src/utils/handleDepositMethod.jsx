import axios from "axios";
import { API } from "../api";
import UseTokenGenerator from "../hooks/UseTokenGenerator";
import UseEncryptData from "../hooks/UseEncryptData";

const handleDepositMethod = (token) => {


  const handleDeposit = async () => {
    const generatedToken = UseTokenGenerator();
    const bankData = {
      type: "depositMethods",
      token: generatedToken,
    };
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
