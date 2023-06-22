import { useState } from "react";
import { deleteRequest } from "../../api/api";
import Edit from "./Edit";
import yoda from "../../assets/img/yoda1.jpg";

const Content = () => {
  const [isEditOpen, setIsEditOpen] = useState(false);

  const handleEditClick = () => {
    setIsEditOpen(!isEditOpen);
  };

  // 7. 질문 및 답변 delete 요청 (바로 업데이트가 안되면, 질문이나 답변 props로 받아와서 상태갱신?)

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
    <div className="pr-4">
      <p className="mb-5">
        (ex Why javascript is so weird? so annoying. Why javascript is so weird?
        so annoying. Why javascript is so weird? so annoying. Why javascript is
        so weird? so annoying. Why javascript is so weird? so annoying.)
      </p>
      <div className="mb-8">
        <span className="text-xs mr-4 bg-tag px-1.5 py-1 text-cyan-800 rounded">
          (ex Javascript)
        </span>
      </div>
      <div className="flex justify-between">
        <div className="text-gray-500 text-sm">
          <button className="mr-2">Share</button>
          <button onClick={handleEditClick} className="mr-2">
            Edit
          </button>
          <button onClick={handleDeleteClick} className="mr-2">
            Delete
          </button>
          {/* 작성자일때만 활성화 */}
        </div>
        <div className="bg-blue-200 p-1.5 rounded w-52">
          <div className="text-xs text-slate-500 mb-1 font-medium">
            asked <span>(ex Jun 19, 2023 at 15:48)</span>
          </div>
          <div className="flex items-center">
            <img src={yoda} className="w-10 mr-1"></img>
            {/* 이미지 각 사용자 프로필사진에 맞게 렌더링 */}
            <div>
              <p className="text-sm text-blue-600">(ex Dongbin Yoo)</p>
              <span className="text-sm text-gray-500 font-bold">(ex 13)</span>
            </div>
          </div>
        </div>
      </div>
      {isEditOpen && (
        <Edit isEditOpen={isEditOpen} setIsEditOpen={setIsEditOpen} />
      )}
    </div>
  );
};

export default Content;
