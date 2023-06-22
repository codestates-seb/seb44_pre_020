import { useState } from "react";
import { patchRequest, deleteRequest } from "../../api/api";
import { formattedMonth, year, formattedDay } from "../../assets/strings/date";

const Comment = () => {
  const [commentEditOpen, setCommentEditOpen] = useState(false);
  const [editedCommentBody, setEditedCommentBody] = useState("haha"); // 초기 값은 이전 comment body data

  const handleCommentEditClick = () => {
    setCommentEditOpen(!commentEditOpen);
  };

  // 8, 9. 댓글 patch, delete 요청

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newEditedCommentData = {
      body: editedCommentBody,
      date: `${year}-${formattedMonth}-${formattedDay}`,
    };
    if (newEditedCommentData.body === "") {
      alert("최소 한 글자이상을 작성해주세요.");
    } else {
      patchRequest(
        "https://9eafe059-f15b-42b9-8571-1c6297da44fa.mock.pstmn.io/",
        newEditedCommentData
      );
      setCommentEditOpen(!commentEditOpen);
    }
  };

  const handleDeleteClick = async () => {
    try {
      await deleteRequest(
        "https://7824fe4c-db17-4a35-8a83-3480e0f32f69.mock.pstmn.io"
      );
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <>
      <div className="border-y border-solid text-sm mb-2 p-0.5 pl-4">
        <span className="mr-1">(ex What a dope solution!)</span>
        <span className="mr-1">
          - <a className="text-blue-600">(ex Dongbin Yoo)</a>
        </span>
        <span className="text-slate-400 mr-3">(ex Jun 19, 2020 at 14:55)</span>
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
