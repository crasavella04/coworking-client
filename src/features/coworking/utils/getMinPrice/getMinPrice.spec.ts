import { ICoworkingPrice } from "@/entities/coworking/model/ICoworkingPrice";
import { expect, test } from "@playwright/test";
import { getMinPrice } from "./getMinPrice";

test.describe("getMinPrice", () => {
  test("filled price array", async () => {
    const prices: ICoworkingPrice[] = [
      { id: 1, service: 1, rub: 123, coworkingId: 1 },
      { id: 2, service: 1, rub: 103, coworkingId: 1 },
      { id: 3, service: 1, rub: 123243, coworkingId: 1 },
      { id: 4, service: 1, rub: 1243, coworkingId: 1 },
    ];

    const result = getMinPrice(prices);
    expect(result).toBe(103);
  });

  test("empty price array", async () => {
    const prices: ICoworkingPrice[] = [];
    const result = getMinPrice(prices);
    expect(result).toBe(undefined);
  });
});
