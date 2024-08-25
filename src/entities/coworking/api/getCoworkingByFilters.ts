import { $api } from "@/shared/configs";
import { LIMIT_ITEMS_PER_PAGE } from "@/shared/constants/LIMIT_ITEMS_PER_PAGE";
import { ICoworkingPage } from "../model/ICoworkingPage";

interface IFilters {
  page: number | string;
  cityId?: number | string;
  metroId?: number | string;
  text?: string;
  conveniencesId?: number | string;
  methodSort?: string;
}

export const getCoworkingByFilters = async (
  filters: IFilters
): Promise<ICoworkingPage> => {
  const url = new URL("http://localhost:5000/coworking");

  for (const key in filters) {
    // @ts-ignore
    if (filters[key]) url.searchParams.set(key, filters[key].toString());
  }
  url.searchParams.set("limit", LIMIT_ITEMS_PER_PAGE.toString());

  const { data } = await $api.get(url.pathname + url.search);

  return data;
};
