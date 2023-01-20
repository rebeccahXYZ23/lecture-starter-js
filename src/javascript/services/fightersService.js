import { callApi } from '../helpers/apiHelper';


class FighterService {
  #endpoint = 'repos/oleksandr-danylchenko/street-fighter/contents/resources/api/fighters.json'
 
async getFighters() {
    try {
      const apiResult = await callApi(this.#endpoint, 'GET');
      return JSON.parse(atob(apiResult.content));
    } catch (error) {
      throw error;
    }
  }
 }

 export const fighterService = new FighterService();

