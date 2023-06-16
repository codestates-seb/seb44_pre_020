import axios from "axios";

export default class FakeQuestionApiClient {
  constructor() {}

  async search() {
    return axios.get(`/mockupdata/search.json`);
  }
  async popular() {
    return axios.get(`/mockupdata/popular.json`);
  }
}
