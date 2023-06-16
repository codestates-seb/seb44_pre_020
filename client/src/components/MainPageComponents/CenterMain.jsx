import React from "react";
import { useRecoilValue } from "recoil";
import { QuestionApiState } from "../../Atoms/QuestionApiState";
import { useQuery } from "@tanstack/react-query";
import MainTab from "./MainTab";
import QuestionCard from "./QuestionCard";

export default function CenterMain() {
  const question = useRecoilValue(QuestionApiState);
  const { isLoading, error, data: questions } = useQuery(["questions"], () => question.search());
  console.log(questions);

  return (
    <>
      <div>
        <h1>Top Question</h1>
        <button>Ask Question</button>
      </div>
      <MainTab />
      <section>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error...</p>}
        {questions && (
          <ul>
            {questions.map((question, idx) => (
              <QuestionCard key={idx} question={question} />
            ))}
          </ul>
        )}
      </section>
    </>
  );
}
