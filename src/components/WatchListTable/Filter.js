//USED IN WATCHLIST COMPONENT TO FETCH DATA FOR ALL COINS IN WATCHLIST TABLE
export const FilterMarketData = (allResponses) => {
  const filteredResponse = allResponses.map((response) => {
    return {
      id: response.data.id,
      name: response.data.name,
      image: response.data.image.large,
      currentPrice: response.data.market_data.current_price.gbp,
      // ath: response.data.market_data.ath.gbp,
      // athPercentageChange: response.data.market_data.ath_change_percentage.gbp,
      // atl: response.data.market_data.atl.gbp,
      // atlPercentageChange: response.data.market_data.atl_change_percentage.gbp,
      pricePercentageChange24h:
        response.data.market_data.price_change_percentage_24h,
      pricePercentageChange7d:
        response.data.market_data.price_change_percentage_7d,
      marketCap: response.data.market_data.market_cap.gbp,
      volume: response.data.market_data.total_volume.gbp,
      circulatingSupply: response.data.market_data.circulating_supply,
    };
  });

  return filteredResponse;
};

export function ConvertNumber(labelValue) {
  const sign = Math.sign(Number(labelValue));
  // Nine Zeroes for Billions
  return Math.abs(Number(labelValue)) >= 1.0e9
    ? (sign * (Math.abs(Number(labelValue)) / 1.0e9)).toFixed(2) + "B"
    : // Six Zeroes for Millions
    Math.abs(Number(labelValue)) >= 1.0e6
    ? (sign * (Math.abs(Number(labelValue)) / 1.0e6)).toFixed(2) + "M"
    : // Three Zeroes for Thousands
    Math.abs(Number(labelValue)) >= 1.0e3
    ? (sign * (Math.abs(Number(labelValue)) / 1.0e3)).toFixed(2) + "K"
    : Math.abs(Number(labelValue)).toFixed(2);
}
