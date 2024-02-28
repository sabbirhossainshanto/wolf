export const handleVisibleBankDetails = (
  id,
  visibleBankDetail,
  setVisibleBankDetails
) => {
  if (visibleBankDetail === id) {
    setVisibleBankDetails("");
  } else {
    setVisibleBankDetails(id);
  }
};
