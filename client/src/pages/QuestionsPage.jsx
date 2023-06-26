import { useRecoilState } from "recoil";
import { questionDataState, answersDataState } from "../Atoms/atoms";
import Title from "../components/QuestionsPageComponents/Title";
import Question from "../components/QuestionsPageComponents/Question";
import TipTap from "../components/TipTap";
import RightSidebar from "../components/MainPageComponents/RightSidebar";
import LeftSidebar from "../components/MainPageComponents/LeftSidebar";
import { formattedMonth, year, formattedDay } from "../assets/strings/date";
import { postRequest, getRequest } from "../api/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const QuestionsPage = () => {
  const [answerBody, setAnswerBody] = useState("");
  const [questionData, setQuestionData] = useRecoilState(questionDataState);
  const [answersData, setAnswersData] = useRecoilState(answersDataState);
  const { questionId } = useParams();

  // 2. 질문, 답변 get request (also tags or not) o
  // 3. 답변 post request o

  useEffect(() => {
    const fetchData = async (questionId) => {
      try {
        // const headers = {
        //   "Content-Type": "application/json", // Example header
        //   Authorization: "Bearer your_token", // Example header with token
        // };

        const questionRes = await getRequest(`/mockupdata/questions.json`); // questionId 이용해서, get 요청 보내기

        const question = questionRes.questions.find(
          (q) => q.id === +questionId
        );

        setQuestionData(question);

        // 답변부분 따로 요청보내기(답변이 질문과 함께 들어오면 이부분 지우고 질문 요청 수정 필요)
        const answerRes = await getRequest("/mockupdata/answers.json"); // questionId 이용해서, get 요청 보내기
        const answer = answerRes.answers.filter(
          (a) => a["question_id"] === +questionId
        );
        setAnswersData(answer);
      } catch (err) {
        console.error("Error:", err);
      }
    };

    fetchData(questionId);
  }, [setQuestionData, setAnswersData, questionId]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newAnswerData = {
      // id: 0, // 서버에서 생성
      content: answerBody,
      userId: 1,
      // date: `${year}-${formattedMonth}-${formattedDay}`, // 서버에서 생성
      // vote: 0,
      // accepted: false,
      questionId: +questionId,
    };

    if (newAnswerData.content === "") {
      alert("최소 한 글자이상을 작성해주세요.");
    } else {
      postRequest("https://localhost:8080/answers", newAnswerData);
      setAnswersData([...answersData, newAnswerData]);
    }
  };

  return (
    <>
      <div className="max-w-default-page mx-auto flex">
        <aside className="w-1.1/12 pr-4">
          <LeftSidebar />
        </aside>
        <div className="border-l border-solid border-slate-300 p-6">
          <Title
            title={questionData.title}
            date={questionData.date}
            views={questionData.views}
          />
          <div className="flex">
            <div className="flex-1 shrink-0">
              {Object.keys(questionData).length !== 0 && (
                <Question data={questionData} isQuestion={true} />
              )}
              <div className="mt-5 text-xl">
                {/* (ex 1 Answers(답변이 있을때만)) */}

                {answersData.length !== 0 && `${answersData.length} Answers`}
              </div>

              {answersData.map((answer) => {
                return (
                  <Question
                    key={answer.id}
                    border={"border-b border-solid pb-4"}
                    data={answer}
                    isQuestion={false}
                  />
                );
              })}

              {/* <Question border={"border-b border-solid pb-4"} /> */}
              {/*답변일때만 border추가해서 렌더링*/}

              <form onSubmit={handleFormSubmit} className="mt-6">
                <h3 className="text-2xl">Your Answer</h3>
                <TipTap setBody={setAnswerBody} />
                <button className="bg-sky-500 hover:bg-sky-600 p-2.5 rounded text-white text-sm">
                  Post Your Answer
                </button>
              </form>
            </div>

            <div className="flex-question-side ml-6 mt-4">
              <RightSidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestionsPage;
