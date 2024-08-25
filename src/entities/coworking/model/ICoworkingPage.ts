import { ICoworking } from "./ICoworking";

export interface ICoworkingPage {
  next: string | null;
  prev: string | null;
  countPages: number;
  items: ICoworking[];
}
