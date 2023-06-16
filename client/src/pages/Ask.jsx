import "./Ask.css";
import robot from "../assets/img/robot.png";
import { pencil, dropDown } from "../assets/img/Img";
import Input from "../components/Input";

const Ask = () => {
  return (
    <div className="max-w-ask-page mx-auto my-0 px-6 mb-16">
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold mt-12 ml-7">
          Ask a public question
        </h1>
        <img src={robot} className="mt-1.5"></img>
      </div>
      <div className="w-4/6 bg-ask-1 border-ask-1 border-solid border rounded p-5 mb-4">
        <h2 className="mb-2 text-2xl">Writing a good question</h2>
        <p className="text-sm">
          You’re ready to
          <a className="text-a-color"> ask a programming-related question </a>
          and this form will help guide you through the process.
        </p>
        <p className="text-base mb-4">
          Looking to ask a non-programming question? See
          <a className="text-a-color"> the topics here </a>
          to find a relevant site.
        </p>
        <h4 className="mb-2 font-semibold">Steps</h4>
        <ul className="ml-5 text-xs">
          <li>• Summarize your problem in a one-line title.</li>
          <li>• Describe your problem in more detail.</li>
          <li>• Describe what you tried and what you expected to happen.</li>
          <li>
            • Add “tags” which help surface your question to members of the
            community.
          </li>
          <li>• Review your question and post it to the site.</li>
        </ul>
      </div>

      <Input
        title={"Title"}
        text={
          "Be specific and imagine you&#39;re asking a question to another person."
        }
        placeHolder={"e.g. why is Javascript so weird?"}
        btnText={"Next"}
        isBtn={true}
      />
      <div className="border-solid border rounded-sm border-slate-200">
        <div className="border-solid border-b border-slate-200 p-3">
          Writing a good title
        </div>
        <div className="bg-white flex">
          <div>{pencil}</div>
          <div className="text-sm">
            <p>Your title should summarize the problem.</p>
            <p>
              You might find that you have a better idea of your title after
              writing out the rest of the question.
            </p>
          </div>
        </div>
      </div>

      <Input
        title={"Body"}
        text={
          "The body of your question contains your problem details and results. Minimum 220 characters."
        }
        btnText={"Continue"}
        isBtn={true}
        height={"h-64"}
      />
      <Input
        title={"Tags"}
        text={
          "Add up to 5 tags to describe what your question is about. Start typing to see suggestions."
        }
        placeHolder={"e.g. (pandas react spring)"}
        isBtn={false}
      />
      <div className="border-solid border rounded p-6 bg-white border-slate-200 mb-4">
        <h3 className="mb-1 font-semibold text-base">
          Review questions already on Stack Overflow to see if your question is
          a duplicate.
        </h3>
        <p className="mb-3 text-xs">
          Clicking on these questions will open them in a new tab for you to
          review. Your progress here will be saved so you can come back and
          continue.
        </p>
        <div className="w-full border-solid border rounded p-3.5 border-slate-400 bg-gray-100 flex justify-between">
          <p className="text-gray-500">
            Do any of these posts answer your question?
          </p>
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
