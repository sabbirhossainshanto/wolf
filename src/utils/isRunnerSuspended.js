export const isRunnerSuspended = (market, runner) => {
  if (market?.Status === 2) {
    return true;
  } else if (
    runner?.IsActive === false ||
    runner?.Price === 0 ||
    runner?.Price === 1
  ) {
    return true;
  } else {
    return false;
  }
};
