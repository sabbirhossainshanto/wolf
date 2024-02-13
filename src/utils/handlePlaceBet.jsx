export const handlePlaceBet = (
  item,
  runner,
  betType,
  setOpenBetSlip,
  setPlaceBetValues
) => {
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
  });
};
