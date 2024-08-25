import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type Store = {
  user: null | any;
  isLoading: boolean;
  getUserData: () => Promise<void>;
};

export const useUserStore = create<Store>()(
  persist(
    (set, get) => ({
      user: null,
      isLoading: false,
      getUserData: async () => {},
    }),
    {
      name: "user-storage",
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => ({ user: state.user }),
    }
  )
);
