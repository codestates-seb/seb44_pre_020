import { useRecoilState } from "recoil";
import { bodyState, questionState } from "../Atoms/atoms";
import Title from "../components/QuestionsPageComponents/Title";
import Question from "../components/QuestionsPageComponents/Question";
import TipTap from "../components/TipTap";
import RightSidebar from "../components/MainPageComponents/RightSidebar";
import LeftSidebar from "../components/MainPageComponents/LeftSidebar";
import { formattedMonth, year, formattedDay } from "../assets/strings/date";
import { postRequest, getRequest } from "../api/api";
import { useEffect } from "react";

const QuestionsPage = () => {
  const [body, setBody] = useRecoilState(bodyState);
  const [questionInfo, setQuestionInfo] = useRecoilState(questionState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getRequest();
        setQuestionInfo(res);
      } catch (err) {
        console.error("Error:", err);
      }
    };

    fetchData();
  }, [setQuestionInfo]);

  console.log(questionInfo);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newAnswerData = {
      id: 0,
      content: body,
      author: "",
      date: `${year}-${formattedMonth}-${formattedDay}`,
      score: 0,
      comment: [],
    };
    if (newAnswerData.content === "") {
      alert("최소 한 글자이상을 작성해주세요.");
    } else {
      postRequest(newAnswerData);
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
                <TipTap setBody={setBody} />
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
