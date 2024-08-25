import { $api } from "@/shared/configs";
import { ICoworking } from "../model/ICoworking";

export const getCoworkingById = async (id: string): Promise<ICoworking> => {
  const { data } = await $api.get(`/coworking/${id}`);
  return data;
};
