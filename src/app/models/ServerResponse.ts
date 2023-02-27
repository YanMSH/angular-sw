import {MOCK_PEOPLE, People} from "./People";



export interface ServerResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

export const MOCK_RESPONSE: ServerResponse<People> = {
  "count": 1,
  "next": null,
  "previous": null,
  "results": [
    MOCK_PEOPLE
  ]
}
