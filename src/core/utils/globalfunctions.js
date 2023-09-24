export const formatNumber = (number) => {
  const lastDigit = number % 10;
  const remainingNumber = Math.floor(number / 10);
  const formattedNumber = `${remainingNumber}.${lastDigit}`;
  return formattedNumber;
};

export const addPlayerToWatchlist = (player) => {
  try {
    const existingWatchlist =
      JSON.parse(localStorage.getItem("playerWatchlist")) || [];
    existingWatchlist.push(player);
    const jsonStringify = JSON.stringify(existingWatchlist);
    localStorage.setItem("playerWatchlist", jsonStringify);
    console.log("Player added to watchlist:", player);
  } catch (error) {
    console.error("Error storing player object in watchlist:", error);
  }
};

export const removePlayerFromWatchlist = (playerId) => {
  try {
    const existingWatchlist =
      JSON.parse(localStorage.getItem("playerWatchlist")) || [];
    const playerIndex = existingWatchlist.findIndex(
      (player) => player.id === playerId
    );
    if (playerIndex !== -1) {
      existingWatchlist.splice(playerIndex, 1);
      const jsonStringify = JSON.stringify(existingWatchlist);
      localStorage.setItem("playerWatchlist", jsonStringify);
      console.log("Player removed from watchlist:", playerId);
    } else {
      console.log("Player not found in watchlist.");
    }
  } catch (error) {
    console.error("Error removing player from watchlist:", error);
  }
};
