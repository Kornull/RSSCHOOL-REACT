export type AboutCard = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin?: {
    name: string;
    url: string;
  };
  location?: {
    name: string;
    url: string;
  };
  image?: string;
  episode?: string[];
  url?: string;
  created?: string;
};

export type StatePerson = {
  infoPerson: AboutCard[];
  modalCondition: boolean;
  cards?: AboutCard[];
  loading?: boolean;
};

export enum UrlApi {
  LinkApi = 'https://rickandmortyapi.com/api/character/',
}
