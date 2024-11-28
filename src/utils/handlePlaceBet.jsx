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
    let price;
    const updatedPnl = [];
    item?.runners?.forEach((runner) => {
      const pnl = pnlBySelection?.find(
        (p) => p?.RunnerId === runner?.id || runner?.selectionId
      );
      if (pnl) {
        updatedPnl.push(pnl?.pnl);
      }
    });
    if (item?.btype) {
      price = betType === "back" ? runner?.back[0].price : runner?.lay[0].price;
    } else {
      price =
        betType === "back"
          ? runner?.ex?.availableToBack?.[0]?.price
          : runner?.ex?.availableToLay?.[0]?.price;
    }
    setOpenBetSlip(true);
    setPlaceBetValues({});
    setPlaceBetValues({
      price,
      side: betType === "back" ? 0 : 1,
      selectionId: runner?.id || runner?.selectionId,
      btype: item?.btype,
      eventTypeId: item?.eventTypeId || item?.marketId,
      betDelay: item?.betDelay,
      marketId: item?.id || item?.selectionId,
      lay: betType === "lay",
      back: betType === "back",
      selectedBetName: runner?.name,
      name: item.runners.map((runner) => runner.name),
      runnerId: item.runners.map((runner) => runner.id || runner.selectionId),
      isWeak: item?.isWeak,
      maxLiabilityPerMarket: item?.maxLiabilityPerMarket,
      isBettable: item?.isBettable,
      maxLiabilityPerBet: item?.maxLiabilityPerBet,
      pnl: updatedPnl,
      marketName: item?.name,
      eventId: item?.eventId,
    });
  } else {
    setShowLoginWarn("Please log in to play.");
  }
};
