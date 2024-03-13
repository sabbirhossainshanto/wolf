export const handlePlaceBet = (
  item,
  runner,
  betType,
  setOpenBetSlip,
  setPlaceBetValues,
  pnlBySelection,
  setShowLoginWarn,
  token
) => {
  if (token) {
    const updatedPnl = [];
    item?.runners?.forEach((runner) => {
      const pnl = pnlBySelection?.find((p) => p?.RunnerId === runner?.id);
      if (pnl) {
        updatedPnl.push(pnl?.pnl);
      }
    });
    setOpenBetSlip(true);
    setPlaceBetValues({});
    setPlaceBetValues({
      price: betType === "back" ? runner?.back[0].price : runner?.lay[0].price,
      side: betType === "back" ? 0 : 1,
      selectionId: runner?.id,
      btype: item?.btype,
      eventTypeId: item?.eventTypeId,
      betDelay: item?.betDelay,
      marketId: item?.id,
      lay: betType === "lay",
      back: betType === "back",
      selectedBetName: runner?.name,
      name: item.runners.map((runner) => runner.name),
      runnerId: item.runners.map((runner) => runner.id),
      isWeak: item?.isWeak,
      maxLiabilityPerMarket: item?.maxLiabilityPerMarket,
      isBettable: item?.isBettable,
      maxLiabilityPerBet: item?.maxLiabilityPerBet,
      pnl: updatedPnl,
      marketName: item?.name,
    });
  } else {
    setShowLoginWarn("Please log in to play.");
  }
};
