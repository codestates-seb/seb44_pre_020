import React from "react";
import Tags from "./Tags";

export default function QuestionCard({ question }) {
  const { title, content, author, date, answers, score, tags } = question;

  return (
    <li>
      <div>
        <span>{score}</span>
        <span>{answers}</span>
      </div>
      <div>
        <div>{title}</div>
        <div>
          <Tags tags={tags} />
          <span>{author}</span>
          <span>{date}</span>
        </div>
      </div>
    </li>
  );
}
