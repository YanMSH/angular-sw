export interface People {
  name: string // The name of this person.
  birth_year: string // The birth year of the person, using the in-universe standard of BBY or ABY - Before the Battle of Yavin or After the Battle of Yavin. The Battle of Yavin is a battle that occurs at the end of Star Wars episode IV: A New Hope.
  eye_color: string // The eye color of this person. Will be "unknown" if not known or "n/a" if the person does not have an eye.
  gender: string // The gender of this person. Either "Male", "Female" or "unknown", "n/a" if the person does not have a gender.
  hair_color: string // The hair color of this person. Will be "unknown" if not known or "n/a" if the person does not have hair.
  height: string // The height of the person in centimeters.
  mass: string // The mass of the person in kilograms.
  skin_color: string // The skin color of this person.
  homeworld: string // The URL of a planet resource, a planet that this person was born on or inhabits.
  films: string[] // An array of film resource URLs that this person has been in.
  species: string[] // An array of species resource URLs that this person belongs to.
  starships: string[] // An array of starship resource URLs that this person has piloted.
  vehicles: string[] // An array of vehicle resource URLs that this person has piloted.
  url: string // The hypermedia URL of this resource.
  created: string // The ISO 8601 date format of the time that this resource was created.
  edited: string // The ISO 8601 date format of the time that this resource was edited.
}


// response from 'https://swapi.dev/api/people/77'
export const MOCK_PEOPLE_INFO: People = {
  name: "San Hill",
  height: "191",
  mass: "unknown",
  hair_color: "none",
  skin_color: "grey",
  eye_color: "gold",
  birth_year: "unknown",
  gender: "male",
  homeworld: "https://swapi.dev/api/planets/57/",
  films: [
    "https://swapi.dev/api/films/5/"
  ],
  species: [
    "https://swapi.dev/api/species/34/"
  ],
  vehicles: [],
  starships: [],
  created: "2014-12-20T17:58:17.049000Z",
  edited: "2014-12-20T21:17:50.484000Z",
  url: "https://swapi.dev/api/people/77/"
}

export const MOCK_PEOPLE: People[] = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    hair_color: "blond",
    skin_color: "fair",
    eye_color: "blue",
    birth_year: "19BBY",
    gender: "male",
    homeworld: "https://swapi.dev/api/planets/1/",
    films: [
      "https://swapi.dev/api/films/1/",
      "https://swapi.dev/api/films/2/",
      "https://swapi.dev/api/films/3/",
      "https://swapi.dev/api/films/6/"
    ],
    species: [],
    vehicles: [
      "https://swapi.dev/api/vehicles/14/",
      "https://swapi.dev/api/vehicles/30/"
    ],
    starships: [
      "https://swapi.dev/api/starships/12/",
      "https://swapi.dev/api/starships/22/"
    ],
    created: "2014-12-09T13:50:51.644000Z",
    edited: "2014-12-20T21:17:56.891000Z",
    url: "https://swapi.dev/api/people/1/"
  },
  {
    name: "C-3PO",
    height: "167",
    mass: "75",
    hair_color: "n/a",
    skin_color: "gold",
    eye_color: "yellow",
    birth_year: "112BBY",
    gender: "n/a",
    homeworld: "https://swapi.dev/api/planets/1/",
    films: [
      "https://swapi.dev/api/films/1/",
      "https://swapi.dev/api/films/2/",
      "https://swapi.dev/api/films/3/",
      "https://swapi.dev/api/films/4/",
      "https://swapi.dev/api/films/5/",
      "https://swapi.dev/api/films/6/"
    ],
    species: [
      "https://swapi.dev/api/species/2/"
    ],
    vehicles: [],
    starships: [],
    created: "2014-12-10T15:10:51.357000Z",
    edited: "2014-12-20T21:17:50.309000Z",
    url: "https://swapi.dev/api/people/2/"
  },
  {
    name: "R2-D2",
    height: "96",
    mass: "32",
    hair_color: "n/a",
    skin_color: "white, blue",
    eye_color: "red",
    birth_year: "33BBY",
    gender: "n/a",
    homeworld: "https://swapi.dev/api/planets/8/",
    films: [
      "https://swapi.dev/api/films/1/",
      "https://swapi.dev/api/films/2/",
      "https://swapi.dev/api/films/3/",
      "https://swapi.dev/api/films/4/",
      "https://swapi.dev/api/films/5/",
      "https://swapi.dev/api/films/6/"
    ],
    species: [
      "https://swapi.dev/api/species/2/"
    ],
    vehicles: [],
    starships: [],
    created: "2014-12-10T15:11:50.376000Z",
    edited: "2014-12-20T21:17:50.311000Z",
    url: "https://swapi.dev/api/people/3/"
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    hair_color: "none",
    skin_color: "white",
    eye_color: "yellow",
    birth_year: "41.9BBY",
    gender: "male",
    homeworld: "https://swapi.dev/api/planets/1/",
    films: [
      "https://swapi.dev/api/films/1/",
      "https://swapi.dev/api/films/2/",
      "https://swapi.dev/api/films/3/",
      "https://swapi.dev/api/films/6/"
    ],
    species: [],
    vehicles: [],
    starships: [
      "https://swapi.dev/api/starships/13/"
    ],
    created: "2014-12-10T15:18:20.704000Z",
    edited: "2014-12-20T21:17:50.313000Z",
    url: "https://swapi.dev/api/people/4/"
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    hair_color: "brown",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "19BBY",
    gender: "female",
    homeworld: "https://swapi.dev/api/planets/2/",
    films: [
      "https://swapi.dev/api/films/1/",
      "https://swapi.dev/api/films/2/",
      "https://swapi.dev/api/films/3/",
      "https://swapi.dev/api/films/6/"
    ],
    species: [],
    vehicles: [
      "https://swapi.dev/api/vehicles/30/"
    ],
    starships: [],
    created: "2014-12-10T15:20:09.791000Z",
    edited: "2014-12-20T21:17:50.315000Z",
    url: "https://swapi.dev/api/people/5/"
  },
  {
    name: "Owen Lars",
    height: "178",
    mass: "120",
    hair_color: "brown, grey",
    skin_color: "light",
    eye_color: "blue",
    birth_year: "52BBY",
    gender: "male",
    homeworld: "https://swapi.dev/api/planets/1/",
    films: [
      "https://swapi.dev/api/films/1/",
      "https://swapi.dev/api/films/5/",
      "https://swapi.dev/api/films/6/"
    ],
    species: [],
    vehicles: [],
    starships: [],
    created: "2014-12-10T15:52:14.024000Z",
    edited: "2014-12-20T21:17:50.317000Z",
    url: "https://swapi.dev/api/people/6/"
  },
  {
    name: "Beru Whitesun lars",
    height: "165",
    mass: "75",
    hair_color: "brown",
    skin_color: "light",
    eye_color: "blue",
    birth_year: "47BBY",
    gender: "female",
    homeworld: "https://swapi.dev/api/planets/1/",
    films: [
      "https://swapi.dev/api/films/1/",
      "https://swapi.dev/api/films/5/",
      "https://swapi.dev/api/films/6/"
    ],
    species: [],
    vehicles: [],
    starships: [],
    created: "2014-12-10T15:53:41.121000Z",
    edited: "2014-12-20T21:17:50.319000Z",
    url: "https://swapi.dev/api/people/7/"
  },
  {
    name: "R5-D4",
    height: "97",
    mass: "32",
    hair_color: "n/a",
    skin_color: "white, red",
    eye_color: "red",
    birth_year: "unknown",
    gender: "n/a",
    homeworld: "https://swapi.dev/api/planets/1/",
    films: [
      "https://swapi.dev/api/films/1/"
    ],
    species: [
      "https://swapi.dev/api/species/2/"
    ],
    vehicles: [],
    starships: [],
    created: "2014-12-10T15:57:50.959000Z",
    edited: "2014-12-20T21:17:50.321000Z",
    url: "https://swapi.dev/api/people/8/"
  },
  {
    name: "Biggs Darklighter",
    height: "183",
    mass: "84",
    hair_color: "black",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "24BBY",
    gender: "male",
    homeworld: "https://swapi.dev/api/planets/1/",
    films: [
      "https://swapi.dev/api/films/1/"
    ],
    species: [],
    vehicles: [],
    starships: [
      "https://swapi.dev/api/starships/12/"
    ],
    created: "2014-12-10T15:59:50.509000Z",
    edited: "2014-12-20T21:17:50.323000Z",
    url: "https://swapi.dev/api/people/9/"
  },
  {
    name: "Obi-Wan Kenobi",
    height: "182",
    mass: "77",
    hair_color: "auburn, white",
    skin_color: "fair",
    eye_color: "blue-gray",
    birth_year: "57BBY",
    gender: "male",
    homeworld: "https://swapi.dev/api/planets/20/",
    films: [
      "https://swapi.dev/api/films/1/",
      "https://swapi.dev/api/films/2/",
      "https://swapi.dev/api/films/3/",
      "https://swapi.dev/api/films/4/",
      "https://swapi.dev/api/films/5/",
      "https://swapi.dev/api/films/6/"
    ],
    species: [],
    vehicles: [
      "https://swapi.dev/api/vehicles/38/"
    ],
    starships: [
      "https://swapi.dev/api/starships/48/",
      "https://swapi.dev/api/starships/59/",
      "https://swapi.dev/api/starships/64/",
      "https://swapi.dev/api/starships/65/",
      "https://swapi.dev/api/starships/74/"
    ],
    created: "2014-12-10T16:16:29.192000Z",
    edited: "2014-12-20T21:17:50.325000Z",
    url: "https://swapi.dev/api/people/10/"
  }
]
