import robot from "../assets/img/robot.png";
import Form from "../components/AskPageComponents/Form.jsx";
import { writing, steps } from "../assets/strings/askStrings";

const AskPage = () => {
  return (
    <div className="w-full h-full bg-ask-3 pb-16">
      <div className="max-w-default-page mx-auto px-6">
        <div className="flex justify-between">
          <h1 className="text-3xl font-semibold mt-12">
            Ask a public question
          </h1>
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
        <Form />
      </div>
    </div>
  );
};

export default AskPage;
