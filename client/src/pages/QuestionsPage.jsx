import { useRecoilState } from "recoil";
import { questionDataState } from "../Atoms/atoms";
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
  const { questionId } = useParams();

  // 2. 질문, 답변 get request (also tags or not)
  // 3. 답변 post request

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getRequest("/mockupdata/questions.json"); // questionId 이용해서, get 요청 보내기
        setQuestionData(res);
      } catch (err) {
        console.error("Error:", err);
      }
    };

    fetchData();
  }, [setQuestionData]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newAnswerData = {
      id: 0,
      content: answerBody,
      author: "",
      date: `${year}-${formattedMonth}-${formattedDay}`,
      score: 0,
      comment: [],
    };

    if (newAnswerData.content === "") {
      alert("최소 한 글자이상을 작성해주세요.");
    } else {
      postRequest(
        "https://032b9d6f-98f0-429c-ae1e-76363c379d20.mock.pstmn.io/",
        newAnswerData
      );
    }
  };

  return (
    <>
      <div className="max-w-default-page mx-auto flex">
        <aside className="w-1.1/12 pr-4">
          <LeftSidebar />
        </aside>
        <div className="border-l border-solid border-slate-300 p-6">
          <Title />
          <div className="flex">
            <div className="flex-1 shrink-0">
              <Question />
              <div className="mt-5 text-xl">
                (ex 1 Answers(답변이 있을때만))
              </div>

              <Question border={"border-b border-solid pb-4"} />
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
