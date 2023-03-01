import {MOCK_PEOPLE, MOCK_PEOPLE_INFO, People} from "./People";



export interface ServerResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

export const MOCK_PEOPLE_INFO_RESPONSE: ServerResponse<People> = {
  count: 1,
  next: null,
  previous: null,
  results: [
    MOCK_PEOPLE_INFO
  ]
}

export const MOCK_PEOPLE_RESPONSE: ServerResponse<People> = {
  count: 82,
  next: "https://swapi.dev/api/people/?page=2",
  previous: null,
  results: MOCK_PEOPLE
}

