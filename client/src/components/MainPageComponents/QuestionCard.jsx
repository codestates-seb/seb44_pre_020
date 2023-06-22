import React from "react";
import Tags from "./Tags";
import { useNavigate } from "react-router-dom";
import { formatAgo } from "../../util/date";

export default function QuestionCard({ question }) {
  const { title, content, author, date, answers, score, tags, views } = question;
  const navigate = useNavigate();
  const moveToQuestionPage = () => {
    navigate(`/questions/${question.id}`, { state: { question } });
  };

  return (
    <li className=" flex py-5 border-b-2">
      <div className=" flex flex-col justify-center text-sm ml-8 pl-5 pr-5 text-right">
        <span className=" p-1 ">{score} votes</span>
        <span className=" p-1 opacity-50">{answers} answers</span>
        <span className=" p-1 opacity-50">{views} views</span>
      </div>
      <div className=" flex flex-grow flex-col">
        <div onClick={moveToQuestionPage} className=" text-xl text-[#0074CC] cursor-pointer mb-2">
          {title}
        </div>
        <div className=" flex justify-between mr-2 mt-1">
          <Tags tags={tags} />
          <div className=" flex text-sm p-2 mr-2">
            <span className=" mr-3">{author}</span>
            <span onClick={moveToQuestionPage} className=" text-[#0074CC] cursor-pointer">
              {formatAgo(date)}
            </span>
          </div>
        </div>
      </div>
    </li>
  );
}
