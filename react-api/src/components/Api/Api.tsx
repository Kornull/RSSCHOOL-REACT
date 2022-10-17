import { UrlApi } from '../types/types';

class ApiRender {
  api() {
    return fetch(`${UrlApi.LinkApi}`).then((response) => response.json());
  }

  apiPerson() {
    return fetch(`${UrlApi.LinkApi}?name=morty`).then((response) => response.json());
  }
}

export default ApiRender;
