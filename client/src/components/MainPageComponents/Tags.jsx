import React from "react";

export default function Tags({ tags }) {
  return (
    <div className=" flex flex-wrap mr-10">
      {tags.map((tag, idx) => (
        <span key={idx} className=" text-xs bg-[#E1ECF4] text-[#2e5f80] rounded-[4px] p-2 mr-2 mb-2 cursor-pointer">
          {tag}
        </span>
      ))}
    </div>
  );
}
