import React from "react";
import { useRecoilValue } from "recoil";
import { QuestionApiState } from "../../Atoms/QuestionApiState";
import { useQuery } from "@tanstack/react-query";
import MainTab from "./MainTab";
import QuestionCard from "./QuestionCard";
import { useNavigate } from "react-router-dom";

export default function CenterMain() {
  const question = useRecoilValue(QuestionApiState);
  const { isLoading, error, data: questions } = useQuery(["questions"], () => question.search());
  const navigate = useNavigate();
  console.log(questions);

  return (
    <>
      <div className=" flex flex-col pb-4 border-b-2">
        <div className=" flex justify-between">
          <h1 className="text-3xl font-medium pl-6">Top Questions</h1>
          <button
            onClick={() => navigate(`/ask`)}
            className=" bg-[#1e95ff] hover:bg-[#0074CC] text-base text-white rounded-[4px] p-[9px]"
          >
            Ask Question
          </button>
        </div>
        <div className=" flex justify-end mt-7">
          <MainTab />
        </div>
      </div>

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
