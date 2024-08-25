import { expect, test } from "@playwright/test";
import { createFilterLink } from "./createFilterLink";

test.describe("createFilterLink", () => {
  test("filter without page", async () => {
    const filter = {
      city: 1,
      metro: 1,
    };

    const result = createFilterLink(filter);
    expect(result).toBe("/coworking?city=1&metro=1&page=1");
  });

  test("filter with page", async () => {
    const filter = {
      city: 1,
      metro: 1,
      page: 4,
    };

    const result = createFilterLink(filter);
    expect(result).toBe("/coworking?city=1&metro=1&page=1");
  });

  test("filter with empty fields", async () => {
    const filter = {
      city: undefined,
      metro: null,
      page: 4,
    };

    const result = createFilterLink(filter);
    expect(result).toBe("/coworking?page=1");
  });

  test("empty filter", async () => {
    const filter = {};

    const result = createFilterLink(filter);
    expect(result).toBe("/coworking?page=1");
  });
});
