import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  questionTitleState,
  questionBodyState,
  tagsState,
} from "../../Atoms/atoms";
import { postRequest } from "../../api/api";
import {
  titleString,
  guide1,
  guide2,
  guide3,
  bodyString,
  tagString,
} from "../../assets/strings/askStrings";
import { year, formattedMonth, formattedDay } from "../../assets/strings/date";

import Guide from "./Guide";
import Input from "./Input";
import Review from "./Review";
import { pencil } from "../../assets/img/Img";

const Form = () => {
  const navigate = useNavigate();
  const [isInputFocused, setIsInputFocused] = useState("input1");
  const [questionTitle, setQuestionTitle] = useRecoilState(questionTitleState);
  const [questionBody, setQuestionBody] = useRecoilState(questionBodyState);
  const [tags, setTags] = useRecoilState(tagsState);

  const handleInputFocus = (inputId) => {
    setIsInputFocused(inputId);
  };

  // 1. 질문 post요청 (at once or more than one request)

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const postQuestionData = {
      id: 0,
      title: questionTitle,
      content: questionBody,
      author: "",
      date: `${year}-${formattedMonth}-${formattedDay}`,
      answers: 0,
      score: 0,
      tags: tags,
      views: 0,
      answerArr: [],
      comments: [],
    };
    if (
      postQuestionData.title === "" ||
      postQuestionData.content === "" ||
      tags.length === 0
    ) {
      alert(
        "Title과 Body는 최소 한 글자 이상, Tag는 최소 한 개이상의 태그를 추가해주세요."
      );
    } else {
      postRequest(
        "https://032b9d6f-98f0-429c-ae1e-76363c379d20.mock.pstmn.io/",
        postQuestionData
      );
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
        />
        {isInputFocused === "input1" && (
          <Guide
            img={pencil}
            title={guide1.title}
            text1={guide1.text1}
            text2={guide1.text2}
          />
        )}
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
        {isInputFocused === "input2" && (
          <Guide
            img={pencil}
            title={guide2.title}
            text1={guide2.text1}
            text2={guide2.text2}
          />
        )}
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
        {isInputFocused === "input3" && (
          <Guide
            img={pencil}
            title={guide3.title}
            text1={guide3.text1}
            text2={guide3.text2}
          />
        )}
      </div>
      <Review />
      <button
        type="submit"
        className="bg-sky-500 p-2.5 rounded text-white text-sm hover:bg-sky-600"
      >
        Post your question
      </button>
      <button className="p-2.5 rounded text-sm text-red-700 ml-3 hover:bg-red-50">
        Discard draft
      </button>
    </form>
  );
};

export default Form;
