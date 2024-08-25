import { create } from "zustand";
import { getCoworkingByFilters } from "../api/getCoworkingByFilters";
import { ICoworking } from "../model/ICoworking";

type Store = {
  coworkingPage: Map<string, ICoworking[]>;
  currentData: ICoworking[];
  isLoading: boolean;
  isError: boolean;
  currentPage: number;
  countPage: number;
  nextPage: null | string;
  prevPage: null | string;
  getCoworkingPage: (
    filter: { field: string; value: string }[],
    key: string
  ) => Promise<void>;
};

export const useCoworkingPageStore = create<Store>()((set, get) => ({
  coworkingPage: new Map(),
  currentData: [],
  isLoading: false,
  isError: false,
  currentPage: 1,
  countPage: 1,
  nextPage: null,
  prevPage: null,
  getCoworkingPage: async (filter, key) => {
    if (!get().coworkingPage.get(key))
      set(() => ({ isLoading: true, isError: false }));

    const cityId = filter.find((el) => el.field === "city")?.value;
    const metroId = filter.find((el) => el.field === "metro")?.value;
    const text = filter.find((el) => el.field === "text")?.value;
    const convenienceId = filter.find(
      (el) => el.field === "convenience"
    )?.value;
    const page = filter.find((el) => el.field === "page")?.value;

    const filterData = {
      cityId,
      metroId,
      text,
      convenienceId,
      page: page || 1,
    };

    try {
      const { items, countPages, next, prev } = await getCoworkingByFilters(
        filterData
      );

      const newPage = get().coworkingPage.set(key, items);

      set(() => ({
        coworkingPage: newPage,
        countPage: countPages,
        currentPage: Number(page) | 1,
        nextPage: next,
        prevPage: prev,
        currentData: newPage.get(key),
        isLoading: false,
      }));
    } catch {
      set(() => ({
        isError: true,
        isLoading: false,
      }));
    }
  },
}));
