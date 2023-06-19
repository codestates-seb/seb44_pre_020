import Buttons from "./Buttons";
import Comment from "./Comment";
import Content from "./Content";

const Question = ({ border }) => {
  return (
    <div className={`grid grid-cols-question-grid mt-4 ${border}`}>
      <Buttons />
      <Content />
      <div></div>
      <div className="mt-3 pr-4">
        <Comment />
        <button className="mt-3 text-sm text-slate-400">Add a comment</button>
      </div>
    </div>
  );
};

export default Question;
