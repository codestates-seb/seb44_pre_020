import React from "react";
import Tags from "./Tags";
import { useNavigate } from "react-router-dom";

export default function QuestionCard({ question }) {
  const { title, content, author, date, answers, score, tags, views } = question;
  const navigate = useNavigate();

  return (
    <li className=" flex py-5 border-b-2">
      <div className=" flex flex-col justify-center text-sm ml-8 pl-5 pr-5 text-right">
        <span className=" p-1 ">{score} votes</span>
        <span className=" p-1 opacity-50">{answers} answers</span>
        <span className=" p-1 opacity-50">{views} views</span>
      </div>
      <div>
        <div className=" text-xl text-[#0074CC]">{title}</div>
        <div className=" flex justify-end">
          <Tags tags={tags} />
          <span>{author}</span>
          <span>{date}</span>
        </div>
      </div>
    </li>
  );
}
