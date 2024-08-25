import { create } from "zustand";
import { persist } from "zustand/middleware";
import { getAllCities } from "../api/getAllCities";
import { ICity } from "../model/ICity";

type Store = {
  cities: ICity[];
  isLoading: boolean;
  getCities: () => Promise<void>;
};

export const useCityStore = create<Store>()(
  persist(
    (set, get) => ({
      cities: [],
      isLoading: false,
      getCities: async () => {
        if (get().cities.length === 0) set(() => ({ isLoading: true }));

        const cities = await getAllCities();
        set(() => ({ isLoading: false, cities }));
      },
    }),
    {
      name: "city-storage",
      partialize: (state) => ({ cities: state.cities }),
    }
  )
);
