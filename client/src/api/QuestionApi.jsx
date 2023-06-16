export default class QuestionApi {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }
  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }
  async #searchByKeyword(keyword) {
    return this.apiClient.search().then((res) => res.data.questions);
  }

  async #mostPopular() {
    return this.apiClient.popular().then((res) => res.data.questions);
  }
}
