import React from "react";

export default function MainTab() {
  return (
    <ul className=" flex">
      <li>
        <button className=" rounded-l-[6px] py-2 px-4 border-2 border-r-0 text-[#6d6d6d] hover:bg-[#E3E6E8]">Interesting</button>
      </li>
      <li>
        <button className=" py-2 px-4 border-2 border-r-0 text-[#6d6d6d] hover:bg-[#E3E6E8]">Day</button>
      </li>
      <li>
        <button className=" py-2 px-4 border-2 border-r-0 text-[#6d6d6d] hover:bg-[#E3E6E8]">Week</button>
      </li>
      <li>
        <button className=" rounded-r-[6px] py-2 px-4 border-2 text-[#6d6d6d] hover:bg-[#E3E6E8]">Month</button>
      </li>
    </ul>
  );
}
