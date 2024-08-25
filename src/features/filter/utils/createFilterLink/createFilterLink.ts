export const createFilterLink = (filterData: any) => {
  const url = new URL(
    import.meta?.env?.VITE_BASE_URL || "https://example.com" + "/coworking"
  );

  for (const key in filterData) {
    if (filterData[key]) url.searchParams.set(key, filterData[key].toString());
  }

  url.searchParams.set("page", "1");

  return url.pathname + url.search;
};
