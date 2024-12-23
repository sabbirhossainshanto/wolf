export const isGameSuspended = (games) => {
  if (
    games?.status !== "OPEN" ||
    games?.runners?.[0]?.status !== "OPEN" ||
    games?.runners?.[1]?.status !== "OPEN"
  ) {
    return true;
  } else {
    return false;
  }
};
