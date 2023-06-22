import React, { useMemo } from "react";
import { useRecoilValue } from "recoil";
import { QuestionApiState } from "../../Atoms/QuestionApiState";
import { useQuery } from "@tanstack/react-query";
import MainContents from "./MainContents";
import QuestionContents from "./QuestionContents";
import { SortOrderState } from "../../Atoms/SortOrderState";

export default function CenterMain() {
  const question = useRecoilValue(QuestionApiState);
  const sortOrder = useRecoilValue(SortOrderState);
  const { isLoading, error, data: topQuestions } = useQuery(["topQuestions"], () => question.search());

  const getSorted = useMemo(() => {
    if (!topQuestions) {
      return null;
    }
    switch (sortOrder) {
      case "Latest":
        return [...topQuestions].sort((a, b) => new Date(b.date) - new Date(a.date));
      case "Votes":
        return [...topQuestions].sort((a, b) => b.score - a.score);
      case "Answers":
        return [...topQuestions].sort((a, b) => b.answers - a.answers);
      case "Views":
        return [...topQuestions].sort((a, b) => b.views - a.views);
      default:
        return [...topQuestions].sort((a, b) => new Date(b.date) - new Date(a.date));
    }
  }, [sortOrder, topQuestions]);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error...</p>}
      {topQuestions && <MainContents questions={getSorted} />}
      {/* {topQuestions && <QuestionContents questions={topQuestions} />} */}
    </>
  );
}
