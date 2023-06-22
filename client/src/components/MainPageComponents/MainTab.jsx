import React from "react";
import { useSetRecoilState } from "recoil";
import { SortOrderState } from "../../Atoms/SortOrderState";

export default function MainTab() {
  const setSortOrder = useSetRecoilState(SortOrderState);

  return (
    <ul className=" flex">
      <li>
        <button
          onClick={() => setSortOrder("Latest")}
          className=" rounded-l-[6px] py-2 px-4 border-2 border-r-0 text-[#6d6d6d] hover:bg-[#E3E6E8]"
        >
          Latest
        </button>
      </li>
      <li>
        <button
          onClick={() => setSortOrder("Votes")}
          className=" py-2 px-4 border-2 border-r-0 text-[#6d6d6d] hover:bg-[#E3E6E8]"
        >
          Votes
        </button>
      </li>
      <li>
        <button
          onClick={() => setSortOrder("Answers")}
          className=" py-2 px-4 border-2 border-r-0 text-[#6d6d6d] hover:bg-[#E3E6E8]"
        >
          Answers
        </button>
      </li>
      <li>
        <button
          onClick={() => setSortOrder("Views")}
          className=" rounded-r-[6px] py-2 px-4 border-2 text-[#6d6d6d] hover:bg-[#E3E6E8]"
        >
          Views
        </button>
      </li>
    </ul>
  );
}
