import { IMetro } from "@/entities/metro";

export interface ICity {
  id: number;
  name: string;
  metro: IMetro[];
}
