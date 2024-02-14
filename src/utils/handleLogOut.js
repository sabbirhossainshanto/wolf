export const handleLogOut = () => {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key !== "checkedBonusToken") {
      localStorage.removeItem(key);
    }
  }
};
