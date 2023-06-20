import { useState } from "react";

const Comment = () => {
  const [commentEditOpen, setCommentEditOpen] = useState(false);

  const handleCommentEditClick = () => {
    setCommentEditOpen(!commentEditOpen);
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
        <button className="text-red-500 text-sm">Delete</button>
      </div>
      {commentEditOpen && (
        <form>
          <textarea
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
