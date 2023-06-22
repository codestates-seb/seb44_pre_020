import { useState } from "react";
import Buttons from "./Buttons";
import Comment from "./Comment";
import Content from "./Content";
import { formattedMonth, year, formattedDay } from "../../assets/strings/date";
import { postRequest } from "../../api/api";

const Question = ({ border }) => {
  const [commentCreateOpen, setCommentCreateOpen] = useState(false);
  const [commentBody, setCommentBody] = useState("");

  const handleCommentCreateClick = () => {
    setCommentCreateOpen(!commentCreateOpen);
  };

  // 4. comment, vote 등 get 요청
  // 5. comment post 요청

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const postCommentData = {
      id: 0,
      content: commentBody,
      author: "",
      date: `${year}-${formattedMonth}-${formattedDay}`,
    };

    if (postCommentData.content === "") {
      alert("최소 한 글자이상을 작성해주세요.");
    } else {
      postRequest(
        "https://032b9d6f-98f0-429c-ae1e-76363c379d20.mock.pstmn.io/",
        postCommentData
      );
    }
  };

  return (
    <div className={`grid grid-cols-question-grid mt-5 ${border}`}>
      <Buttons />
      <Content />
      <div></div>
      <div className="mt-3 pr-4">
        <Comment />
        <button
          onClick={handleCommentCreateClick}
          className=" text-sm text-blue-600 mb-2"
        >
          Add a comment
        </button>
        {commentCreateOpen && (
          <form onSubmit={handleFormSubmit}>
            <textarea
              onChange={(e) => setCommentBody(e.target.value)}
              className="w-full h-16 border border-solid text-sm p-1"
              placeholder="Use comments to reply to other users or notify them of changes. if you are adding new information, edit your post instead of commenting."
            ></textarea>
            <div className="flex justify-end">
              <button className="bg-sky-500 hover:bg-sky-600 p-2.5 rounded text-white text-sm">
                Add comment
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Question;
