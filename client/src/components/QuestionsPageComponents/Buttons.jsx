import {
  IoCaretUpCircleOutline,
  IoCaretDownCircleOutline,
} from "react-icons/io5";
import { FiBookmark } from "react-icons/fi";
import { MdHistory } from "react-icons/md";

const Buttons = () => {
  return (
    <div className="flex flex-col items-center pr-4">
      <button className="text-5xl mb-1">
        <IoCaretUpCircleOutline />
      </button>
      <div className="mb-1 text-xl font-medium">32</div>
      <button className="text-5xl mb-2">
        <IoCaretDownCircleOutline />
      </button>
      <button className="text-xl text-slate-400 mb-2">
        <FiBookmark />
      </button>
      <button className="text-xl text-slate-400">
        <MdHistory />
      </button>
    </div>
  );
};

export default Buttons;
