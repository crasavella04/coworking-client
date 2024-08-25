import { useCityStore } from "@/entities/city";
import { useConvenienceStore } from "@/entities/convenience";
import { useEffect } from "react";

export const useGetFilterData = () => {
  const { cities, getCities, isLoading: cityLoading } = useCityStore();
  const {
    conveniences,
    getConveniences,
    isLoading: convenienceLoading,
  } = useConvenienceStore();

  useEffect(() => {
    getCities();
    getConveniences();
  }, []);

  return {
    cities,
    conveniences,
    isLoading: cityLoading || convenienceLoading,
  };
};
