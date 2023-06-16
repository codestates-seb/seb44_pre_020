import { atom } from "recoil";
import QuestionApi from "../api/QuestionApi";
import FakeQuestionApiClient from "../api/FakeQuestionApiClient";

const client = new FakeQuestionApiClient();
const question = new QuestionApi(client);

export const QuestionApiState = atom({
  key: "QuestionApiState",
  default: question,
});
