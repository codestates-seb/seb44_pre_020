import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { isFocus } from "../../Atoms/atoms";
import { titleState, bodyState, tagsState } from "../../Atoms/atoms";
import { postQuestion } from "../../api/askApi";
import { titleString, guide1, guide2, guide3, bodyString, tagString } from "../../assets/strings/askStrings";
import { year, formattedMonth, formattedDay } from "../../assets/strings/date";

import Guide from "./Guide";
import Input from "./Input";
import Review from "./Review";
import { pencil } from "../../assets/img/Img";

const Form = () => {
  const navigate = useNavigate();
  const [isInputFocused, setIsInputFocused] = useRecoilState(isFocus);
  const [title, setTitle] = useRecoilState(titleState);
  const [body, setBody] = useRecoilState(bodyState);
  const [tags, setTags] = useRecoilState(tagsState);

  const handleInputFocus = (inputId) => {
    setIsInputFocused(inputId);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newQuestionData = {
      id: 0,
      title: title,
      content: body,
      author: "",
      date: `${year}-${formattedMonth}-${formattedDay}`,
      answers: 0,
      score: 0,
      tags: tags,
    };
    if (newQuestionData.title === "" || newQuestionData.content === "" || tags.length === 0) {
      alert("Title과 Body는 최소 한 글자 이상, Tag는 최소 한 개이상의 태그를 추가해주세요.");
    } else {
      postQuestion(newQuestionData);
      navigate("/");
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="flex">
        <Input
          title={titleString.title}
          text={titleString.text1}
          placeHolder={titleString.text2}
          btnText={titleString.text3}
          isTitle={true}
          onFocus={() => handleInputFocus("input1")}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {isInputFocused === "input1" && <Guide img={pencil} title={guide1.title} text1={guide1.text1} text2={guide1.text2} />}
      </div>
      <div className="flex items-start">
        <Input
          title={bodyString.title}
          text={bodyString.text1}
          btnText={bodyString.text2}
          height={bodyString.height}
          onFocus={() => handleInputFocus("input2")}
          isBody={true}
        />
        {isInputFocused === "input2" && <Guide img={pencil} title={guide2.title} text1={guide2.text1} text2={guide2.text2} />}
      </div>
      <div className="flex">
        <Input
          title={tagString.title}
          text={tagString.text1}
          placeHolder={tagString.text2}
          btnText={tagString.text3}
          onFocus={() => handleInputFocus("input3")}
          isTag={true}
        />
        {isInputFocused === "input3" && <Guide img={pencil} title={guide3.title} text1={guide3.text1} text2={guide3.text2} />}
      </div>
      <Review />
      <button type="submit" className="bg-sky-500 p-2.5 rounded text-white text-sm hover:bg-sky-600">
        Post your question
      </button>
      <button className="p-2.5 rounded text-sm text-red-700 ml-3 hover:bg-red-50">Discard draft</button>
    </form>
  );
};

export default Form;
