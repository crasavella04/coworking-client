import { $api } from "@/shared/configs";
import { IConvenience } from "../model/IConvenience";

export const getAllConveniences = async (): Promise<IConvenience[]> => {
  const { data } = await $api.get("/conveniences");
  return data;
};
