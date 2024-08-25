import { ICity } from "@/entities/city";
import { IConvenience } from "@/entities/convenience";
import { IMetro } from "@/entities/metro";
import { ICoworkingImage } from "./ICoworkingImage";
import { ICoworkingPrice } from "./ICoworkingPrice";

export interface ICoworking {
  id: number;
  title: string;
  description: string;
  link?: string;
  longitude: number;
  latitude: number;
  address: string;
  cityId: number;
  metroId?: number;
  city: ICity;
  metro?: IMetro;
  price: ICoworkingPrice[];
  images: ICoworkingImage[];
  conveniences: IConvenience[];
  rate: number;
  countRate: number;
}
