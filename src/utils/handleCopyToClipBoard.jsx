import copy from "copy-to-clipboard";

export const handleCopyToClipBoard = (text, setMessage) => {
  console.log(text,copy);
  copy(text);
  setMessage('Copied to clipboard.');
};
