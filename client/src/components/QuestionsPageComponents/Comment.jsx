import { useState } from "react";
import { patchRequest, deleteRequest } from "../../api/api";
import { formattedMonth, year, formattedDay } from "../../assets/strings/date";
import { commentsDataState } from "../../Atoms/atoms";
import { useRecoilState } from "recoil";

const Comment = ({ data, setCommentsData, commentsData }) => {
  const [commentEditOpen, setCommentEditOpen] = useState(false);
  const [comment, setComment] = useState(data);
  const [editedCommentBody, setEditedCommentBody] = useState(data.content); // 초기 값은 이전 comment body data

  const handleCommentDeleteClick = () => {
    setCommentsData(
      commentsData.filter((c) => {
        return c.id !== comment.id;
      })
    );
  };

  const handleCommentEditClick = () => {
    setCommentEditOpen(!commentEditOpen);
  };

  // 8, 9. 댓글 patch, delete 요청 o

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newEditedCommentData = {
      content: editedCommentBody,
    };
    if (newEditedCommentData.body === "") {
      alert("최소 한 글자이상을 작성해주세요.");
    } else {
      patchRequest(
        `https://9eafe059-f15b-42b9-8571-1c6297da44fa.mock.pstmn.io/`, // id로 수정 코멘트 명시 ${data.id}
        newEditedCommentData
      );
      setCommentEditOpen(!commentEditOpen);
      setComment({ ...comment, content: editedCommentBody });
    }
  };

  const handleDeleteClick = () => {
    deleteRequest(
      `https://7824fe4c-db17-4a35-8a83-3480e0f32f69.mock.pstmn.io` // id로 지울 코멘트 명시 ${data.id}
    );
    handleCommentDeleteClick();
  };

  return (
    <>
      <div className="border-y border-solid text-sm mb-2 p-0.5 pl-4">
        <span className="mr-1">
          {comment.content}
          {/* (ex What a dope solution!) */}
        </span>
        <span className="mr-1">
          -{" "}
          <a className="text-blue-600">
            {comment.author}
            {/* (ex Dongbin Yoo) */}
          </a>
        </span>
        <span className="text-slate-400 mr-3">
          {comment.date}
          {/* (ex Jun 19, 2020 at 14:55) */}
        </span>
        <button
          onClick={handleCommentEditClick}
          className="text-blue-600 text-sm mr-2"
        >
          Edit
        </button>
        <button onClick={handleDeleteClick} className="text-red-500 text-sm">
          Delete
        </button>
      </div>
      {commentEditOpen && (
        <form onSubmit={handleFormSubmit}>
          <textarea
            onChange={(e) => setEditedCommentBody(e.target.value)}
            value={editedCommentBody}
            className="w-full h-16 border border-solid text-sm p-1"
            placeholder="Use comments to reply to other users or notify them of changes. if you are adding new information, edit your post instead of commenting."
          ></textarea>
          <div className="flex justify-end">
            <button className="bg-sky-500 hover:bg-sky-600 p-2.5 rounded text-white text-sm">
              Edit comment
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default Comment;
