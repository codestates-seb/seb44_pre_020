import { useRecoilState } from "recoil";
import "./Ask.css";
import robot from "../assets/img/robot.png";
import { pencil, dropDown } from "../assets/img/img";
import Input from "../components/Input";
import Guide from "../components/Guide";
import {
  writing,
  steps,
  title,
  guide1,
  guide2,
  guide3,
  body,
  tags,
  review,
} from "../assets/strings/askStrings";
import { isFocus } from "../Atoms/isFocus";

const Ask = () => {
  const [isInputFocused, setIsInputFocused] = useRecoilState(isFocus);

  const handleInputFocus = (inputId) => {
    setIsInputFocused(inputId);
  };

  return (
    <div className="max-w-ask-page mx-auto my-0 px-6 mb-16 mt-14">
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold mt-12">Ask a public question</h1>
        <img src={robot} className="mt-1.5"></img>
      </div>
      <div className="w-4/6 bg-ask-1 border-ask-1 border-solid border rounded p-5 mb-4">
        <h2 className="mb-2 text-2xl">{writing.title}</h2>
        <p className="text-sm">
          {writing.text1}
          <a className="text-a-color">{writing.text2}</a>
          {writing.text3}
        </p>
        <p className="text-sm mb-4">
          {writing.text4}
          <a className="text-a-color">{writing.text5}</a>
          {writing.text6}
        </p>
        <h4 className="mb-2 font-semibold">Steps</h4>
        <ul className="ml-5 text-xs">
          <li>{steps.text1}</li>
          <li>{steps.text2}</li>
          <li>{steps.text3}</li>
          <li>{steps.text4}</li>
          <li>{steps.text5}</li>
        </ul>
      </div>
      <div className="flex">
        <Input
          title={title.title}
          text={title.text1}
          placeHolder={title.text2}
          btnText={title.text3}
          isBtn={true}
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
          title={body.title}
          text={body.text1}
          btnText={body.text2}
          isBtn={true}
          height={body.height}
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
          title={tags.title}
          text={tags.text1}
          placeHolder={tags.text2}
          isBtn={false}
          onFocus={() => handleInputFocus("input3")}
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

      <div className="w-4/6 border-solid border rounded p-6 bg-white border-slate-200 mb-4">
        <h3 className="mb-1 font-semibold text-base">{review.title}</h3>
        <p className="mb-3 text-xs">{review.text1}</p>
        <div className="w-full border-solid border rounded p-3.5 border-slate-400 bg-gray-100 flex justify-between">
          <p className="text-gray-500">{review.text2}</p>
          {dropDown}
        </div>
      </div>
      <button className="bg-sky-500 p-2.5 rounded text-white text-sm">
        Post your question
      </button>
      <button className="p-2.5 rounded text-sm text-red-700 ml-3 hover:bg-red-50">
        Discard draft
      </button>
    </div>
  );
};

export default Ask;
