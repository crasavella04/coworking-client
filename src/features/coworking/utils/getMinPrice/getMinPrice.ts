import { ICoworkingPrice } from "@/entities/coworking/model/ICoworkingPrice";

export const getMinPrice = (prices: ICoworkingPrice[]) => {
  if (!prices.length) return undefined;

  let min = prices[0].rub;

  for (const price of prices) {
    if (price.rub < min) min = price.rub;
  }

  return min;
};
