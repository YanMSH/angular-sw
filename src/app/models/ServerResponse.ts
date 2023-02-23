import {Planet} from "./Planet";
import {People} from "./People";

export type Entity = Planet | People;


export interface ServerResponse {
  count: number;
  next: string;
  previous: string;
  results: Entity[];
}
