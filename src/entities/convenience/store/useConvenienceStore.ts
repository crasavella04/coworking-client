import { create } from "zustand";
import { persist } from "zustand/middleware";
import { getAllConveniences } from "../api/getAllConveniences";
import { IConvenience } from "../model/IConvenience";

type Store = {
  conveniences: IConvenience[];
  isLoading: boolean;
  getConveniences: () => Promise<void>;
};

export const useConvenienceStore = create<Store>()(
  persist(
    (set, get) => ({
      conveniences: [],
      isLoading: false,
      getConveniences: async () => {
        if (get().conveniences.length === 0) set(() => ({ isLoading: true }));

        const conveniences = await getAllConveniences();
        set(() => ({ isLoading: false, conveniences }));
      },
    }),
    {
      name: "conveniences-storage",
      partialize: (state) => ({ conveniences: state.conveniences }),
    }
  )
);
