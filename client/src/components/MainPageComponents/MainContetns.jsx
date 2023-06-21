import React from "react";
import { useNavigate } from "react-router-dom";
import MainTab from "./MainTab";

export default function MainContetns() {
  const navigate = useNavigate();
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
      <div>
        {questions && (
          <ul>
            {questions.map((question, idx) => (
              <QuestionCard key={idx} question={question} />
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
