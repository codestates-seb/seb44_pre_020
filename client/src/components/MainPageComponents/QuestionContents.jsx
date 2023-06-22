import React from "react";
import MainTab from "./MainTab";
import QuestionCard from "./QuestionCard";
import { useNavigate } from "react-router-dom";

export default function QuestionContents({ questions }) {
  const navigate = useNavigate();

  return (
    <>
      <div className=" flex flex-col pb-4 border-b-2 pl-6">
        <div className=" flex justify-between mb-6">
          <h1 className="text-3xl font-medium">Search Results</h1>
          <button
            onClick={() => navigate(`/ask`)}
            className=" bg-[#1e95ff] hover:bg-[#0074CC] text-base text-white rounded-[4px] p-[9px]"
          >
            Ask Question
          </button>
        </div>
        <div className=" text-xs opacity-70">
          <div className=" mb-1">Results for what is typescript</div>
          <div>Search options not deleted</div>
        </div>
        <div className=" flex justify-between items-center mt-7">
          <span className="">40,772 results</span>
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
