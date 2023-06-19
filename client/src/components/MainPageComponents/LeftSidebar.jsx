import React from "react";
import { ImEarth } from "react-icons/im";
import { MdStars } from "react-icons/md";
import { FiShoppingBag } from "react-icons/fi";

export default function LeftSidebar() {
  return (
    <nav className=" overflow-y-auto h-screen hide-scrollbar">
      <ol className=" m-1">
        <li className=" p-2 ">
          <div className=" text-base mb-2">Home</div>
        </li>
        <ol className=" p-2">
          <li className="mb-2 text-sm">PUBLIC</li>
          <li className=" p-2">
            <div className=" flex items-center text-sm">
              <ImEarth className=" mr-2" />
              <span>Questions</span>
            </div>
          </li>
          <li className=" p-2 text-sm">
            <div className=" ml-[22px]">Tags</div>
          </li>
          <li className=" p-2 text-sm">
            <div className=" ml-[22px]">Users</div>
          </li>
          <li className=" p-2 text-sm">
            <div className=" ml-[22px]">Companies</div>
          </li>
          <li className=" text-sm mt-4">COLLECTIVES</li>
          <li className=" py-2">
            <div className=" flex items-center">
              <MdStars className=" mr-1" />
              <span className=" text-xs">Explore Collectives</span>
            </div>
          </li>
        </ol>
        <li className=" text-sm p-2 mt-2">TEAMS</li>
        <li className=" flex items-center p-2">
          <FiShoppingBag className=" mr-2" />
          <div className=" text-xs">Create free Team</div>
        </li>
        {/* <li className=" text-sm p-2">Looking for your Teams?</li> */}
      </ol>
    </nav>
  );
}
