import Title from "../components/QuestionsPageComponents/Title";
import Question from "../components/QuestionsPageComponents/Question";

const QuestionsPage = () => {
  return (
    <div className="max-w-default-page mx-auto p-6 mb-10 mt-14 border-l border-solid border-slate-300">
      <Title />
      <div className="flex">
        <div className="flex-1 shrink-0">
          <Question />
          <div className="mt-5 text-xl">1 Answers</div>
          {/* 답변이 있을때만 보여주기  */}
          <Question border={"border-b border-solid pb-4"} />
          {/*답변일때만 border추가해서 렌더링*/}
        </div>
        <div className="flex-question-side ml-6"></div>
      </div>
    </div>
  );
};

export default QuestionsPage;
