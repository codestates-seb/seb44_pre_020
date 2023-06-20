import { useRecoilState } from "recoil";
import { bodyState } from "../../Atoms/atoms";
import TipTap from "../TipTap";
import { postRequest } from "../../api/api";
import { year, formattedMonth, formattedDay } from "../../assets/strings/date";

const Edit = ({ handleEditClick }) => {
  const [body, setBody] = useRecoilState(bodyState);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newData = {
      id: 0,
      content: body,
      author: "",
      date: `${year}-${formattedMonth}-${formattedDay}`,
      score: 0,
    };
    if (newData.content === "") {
      alert("최소 한 글자이상을 작성해주세요.");
    } else {
      postRequest(newData);
    }
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <TipTap setBody={setBody} />
        <div className="flex justify-end">
          <button
            onClick={handleEditClick}
            className="bg-sky-500 hover:bg-sky-600 p-2.5 rounded text-white text-sm"
          >
            Complete!
          </button>
        </div>
      </form>
    </div>
  );
};

export default Edit;

// 각 질문, 답변에 맞게 edit버튼을 눌렀을때 내용이 불러와져야함.
