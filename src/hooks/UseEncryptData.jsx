import CryptoJS from "crypto-js";
const UseEncryptData = (data) => {
  const jsonData = JSON.stringify(data);
  const { ciphertext, iv, salt } = CryptoJS.AES.encrypt(
    jsonData,
    "qz,wBm>)drq+_nE)[d|5g{s4EF:Szvf}"
  );
  const encryptedData = {
    ct: ciphertext.toString(CryptoJS.enc.Base64),
    iv: iv.toString(),
    s: salt.toString(),
  };
  return encryptedData;
};

export default UseEncryptData;
