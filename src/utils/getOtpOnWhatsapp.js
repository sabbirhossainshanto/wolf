import toast from "react-hot-toast";
import { API, Settings } from "../api";
import axios from "axios";
import UseTokenGenerator from "../hooks/UseTokenGenerator";
import UseEncryptData from "../hooks/UseEncryptData";

const getOtpOnWhatsapp = async (mobileNo, setOrderId, setShowRegister) => {
  const generatedToken = UseTokenGenerator();
  const otpData = {
    mobile: mobileNo,
    token: generatedToken,
    site: Settings?.siteUrl,
    type: "otpsend",
  };
  const encryptedData = UseEncryptData(otpData);
  const res = await axios.post(API.otpless, encryptedData);
  const data = res.data;
  if (data?.success) {
    setOrderId({
      orderId: data?.result?.orderId,
      otpMethod: "whatsapp",
    });
    toast.success(data?.result?.message);
    setShowRegister(true);
  } else {
    toast.error(data?.error?.errorMessage);
  }
};

export default getOtpOnWhatsapp;
