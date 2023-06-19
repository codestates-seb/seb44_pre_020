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
      <div className=" flex justify-between pb-5 border-b-2">
        <h1 className="text-3xl font-medium pl-5">Top Questions</h1>
        <button className=" bg-[#1e95ff] hover:bg-[#0074CC] text-base text-white rounded-[4px] p-[10px]">Ask Question</button>
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
