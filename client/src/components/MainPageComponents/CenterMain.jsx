import React from "react";
import { useRecoilValue } from "recoil";
import { QuestionApiState } from "../../Atoms/QuestionApiState";
import { useQuery } from "@tanstack/react-query";
import MainContents from "./MainContents";

export default function CenterMain() {
  const question = useRecoilValue(QuestionApiState);
  const { isLoading, error, data: questions } = useQuery(["questions"], () => question.search());

  if (isLoading) return <p>Loading...</p>;
  else if (error) return <p>Error...</p>;

  return (
    <>
      <MainContents questions={questions} />
    </>
  );
}
