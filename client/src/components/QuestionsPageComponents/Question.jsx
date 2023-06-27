import { useState, useEffect } from "react";
import Buttons from "./Buttons";
import Comment from "./Comment";
import Content from "./Content";
import { formattedMonth, year, formattedDay } from "../../assets/strings/date";
import { postRequest, getRequest } from "../../api/api";
import { commentsDataState } from "../../Atoms/atoms";
import { useRecoilState } from "recoil";

const Question = ({ border, data, isQuestion }) => {
  const [commentCreateOpen, setCommentCreateOpen] = useState(false);
  const [commentBody, setCommentBody] = useState("");
  const [commentsData, setCommentsData] = useState([]);
  const [contentState, setContentState] = useState(data.content);
  const [voteState, setVoteState] = useState(data.vote);
  const [acceptedState, setAcceptedState] = useState(data.accepted);

  const handleContentUpdate = (updatedContent) => {
    setContentState(updatedContent);
  };

  const handleCommentCreateClick = () => {
    setCommentCreateOpen(!commentCreateOpen);
  };

  // 4. comment get 요청 o
  // 그냥 comment만 명시하는 endpoint로 보낼 경우, answer id와 question id는 달라야 하므로 data.id 만 필요
  // answer/comment or question/comment 이런 식이면, isQuestion props를 이용해 조건문으로 나눠서 요청보내기
  // 5. comment post 요청 o

  useEffect(() => {
    setContentState(data.content);
  }, [data.content]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const endpoint = isQuestion
        //   ? `/mockupdata/comments.json/question`
        //   : `/mockupdata/comments.json/answer`;

        const commentRes = await getRequest(`/mockupdata/comments.json`); // Id 이용해서, get 요청 보내기 ${data.id}

        const comment = commentRes.comments.filter(
          (q) => q["content_id"] === data.id
        );

        setCommentsData(comment);
      } catch (err) {
        console.error("Error:", err);
      }
    };

    fetchData();
  }, [setCommentsData, data.id]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const postCommentData = {
      // id: 0,
      content: commentBody,
      author: "",
      // date: `${year}-${formattedMonth}-${formattedDay}`,
      content_id: data.id,
    };

    const headers = {
      "Content-Type": "application/json", // Example header
      Authorization: "Bearer your_token", // Example header with token
    };

    if (postCommentData.content === "") {
      alert("최소 한 글자이상을 작성해주세요.");
    } else {
      postRequest(
        "https://032b9d6f-98f0-429c-ae1e-76363c379d20.mock.pstmn.io/",
        postCommentData,
        headers
      );
      setCommentsData([...commentsData, postCommentData]);
    }
  };
  return (
    <div className={`grid grid-cols-question-grid mt-5 ${border}`}>
      <Buttons
        voteState={voteState}
        setVoteState={setVoteState}
        acceptedState={acceptedState}
        setAcceptedState={setAcceptedState}
        isQuestion={isQuestion}
      />

      <Content
        content={contentState}
        tags={data.tags}
        date={data.date}
        author={data.author}
        id={data.id}
        isQuestion={isQuestion}
        handleContentUpdate={handleContentUpdate}
      />
      <div></div>
      <div className="mt-3 pr-4">
        {commentsData.map((comment, index) => {
          return (
            <Comment
              key={index}
              data={comment}
              setCommentsData={setCommentsData}
              commentsData={commentsData}
            />
          );
        })}
        {/* <Comment /> */}
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
