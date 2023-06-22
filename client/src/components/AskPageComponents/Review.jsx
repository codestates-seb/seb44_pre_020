import { dropDown } from "../../assets/img/Img";
import { review } from "../../assets/strings/askStrings";

const Review = () => {
  return (
    <div className="w-4/6 border-solid border rounded p-6 bg-white border-slate-200 mb-4">
      <h3 className="mb-1 font-semibold text-base">{review.title}</h3>
      <p className="mb-3 text-xs">{review.text1}</p>
      <div className="w-full border-solid border rounded p-3.5 border-slate-400 bg-gray-100 flex justify-between">
        <p className="text-gray-500">{review.text2}</p>
        {dropDown}
      </div>
    </div>
  );
};

export default Review;
