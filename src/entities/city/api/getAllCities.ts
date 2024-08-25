import { $api } from "@/shared/configs";
import { ICity } from "../model/ICity";

export const getAllCities = async (): Promise<ICity[]> => {
  const { data } = await $api.get("/city");
  return data;
};
