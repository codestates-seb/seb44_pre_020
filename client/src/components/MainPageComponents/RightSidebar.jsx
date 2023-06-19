import React from "react";
import { HiPencil } from "react-icons/hi";
import { RxChatBubble } from "react-icons/rx";
import { FaStackOverflow } from "react-icons/fa";
import { AiOutlineFire } from "react-icons/ai";
import { GiDuffelBag } from "react-icons/gi";

export default function RightSidebar() {
  return (
    <>
      <ul className=" border-2 border-[#f3ebd0] rounded-lg">
        <li className=" bg-[#FBF3D5] p-3 font-semibold">The Overflow Blog</li>
        <li className="flex items-center bg-[#FDF7E2] p-4 cursor-pointer">
          <HiPencil className="flex-shrink-0 mb-7 mr-2" />
          <div className="w-full overflow-hidden overflow-ellipsis line-clamp-2">
            Hype or not? AI’s benefits for developers explored in the 2023 Developer Survey
          </div>
        </li>
        <li className="flex items-center bg-[#FDF7E2] p-4 cursor-pointer">
          <HiPencil className="flex-shrink-0 mb-7 mr-2" />
          <div className="w-full overflow-hidden overflow-ellipsis line-clamp-2">
            Pair programing? We peek under the hood of Duet, Google’s coding assistant....
          </div>
        </li>
        <li className=" bg-[#FBF3D5] p-3 font-semibold">Featured on Meta</li>
        <li className="flex items-center bg-[#FDF7E2] p-4 cursor-pointer">
          <RxChatBubble className="flex-shrink-0 mb-7 mr-2" />
          <div className="w-full overflow-hidden overflow-ellipsis line-clamp-2">
            Statement from SO: June 5, 2023 Moderator Action
          </div>
        </li>
        <li className="flex items-center bg-[#FDF7E2] p-4 cursor-pointer">
          <RxChatBubble className="flex-shrink-0 mb-7 mr-2" />
          <div className="w-full overflow-hidden overflow-ellipsis line-clamp-2">
            Stack Exchange Network Outage – June 15, 2023
          </div>
        </li>
        <li className="flex items-center bg-[#FDF7E2] p-4 cursor-pointer">
          <FaStackOverflow className="flex-shrink-0 mb-7 mr-2" />
          <div className="w-full overflow-hidden overflow-ellipsis line-clamp-2">
            Does the policy change for AI-generated content affect users who (want to)...
          </div>
        </li>
        <li className="flex items-center bg-[#FDF7E2] p-4 cursor-pointer">
          <FaStackOverflow className="flex-shrink-0 mb-7 mr-2" />
          <div className="w-full overflow-hidden overflow-ellipsis line-clamp-2">
            Temporary policy: Generative AI (e.g., ChatGPT) is banned
          </div>
        </li>
        <li className="flex items-center bg-[#FDF7E2] p-4 cursor-pointer">
          <FaStackOverflow className="flex-shrink-0 mb-7 mr-2" />
          <div className="w-full overflow-hidden overflow-ellipsis line-clamp-2">
            We are seeking functional feedback for the formatting assistant
          </div>
        </li>
        <li className=" bg-[#FBF3D5] p-3 font-semibold">Hot Meta Posts</li>
        <li className="flex items-center bg-[#FDF7E2] p-4 cursor-pointer">
          <AiOutlineFire className="flex-shrink-0 mb-7 mr-2" />
          <div className="w-full overflow-hidden overflow-ellipsis line-clamp-2">
            Can users be sanctioned for (admitting to) using SO's first party AI...
          </div>
        </li>
      </ul>
      <div className=" mt-5 border-2 border-[#e9f0f7]">
        <div className=" flex justify-between p-3 opacity-70  bg-[#e9f0f7]">
          <span>Watched Tags</span>
          <span>edit</span>
        </div>
        <div className=" p-5">
          <span className=" bg-[#E1ECF4] text-[#2e5f80] rounded-sm p-2">javascript</span>
        </div>
      </div>
      <div className=" mt-5 border-2 border-[#e9f0f7]">
        <div className=" flex justify-between p-3 opacity-70  bg-[#e9f0f7]">
          <span>Ignored Tags</span>
          <span>edit</span>
        </div>
        <div className=" p-5">
          <span className=" bg-[#E1ECF4] text-[#2e5f80] rounded-sm p-2">python</span>
        </div>
      </div>
      <div className=" mt-10 text-xl mb-3">Hot Network Questions</div>
      <ul className=" text-xs">
        <li className=" flex p-2 items-center text-[#0d78beed]">
          {/* <GiDuffelBag className="text-xl mr-2" /> */}
          <div>Meaning/significance of "All the King's horses" in the Humpty Dumpty nursery rhyme?</div>
        </li>
        <li className=" flex p-2 items-center text-[#0d78beed]">
          {/* <GiDuffelBag className="text-xl mr-2" /> */}
          <div>Difference between measure-theoretic integral and differential-geometric integral</div>
        </li>
        <li className=" flex p-2 items-center text-[#0d78beed]">
          {/* <GiDuffelBag className="text-xl mr-2" /> */}
          <div>Lifting 5 bricks with one hand</div>
        </li>
        <li className=" flex p-2 items-center text-[#0d78beed]">
          {/* <GiDuffelBag className="text-xl mr-2" /> */}
          <div>Find all animals, to get the 13th animal</div>
        </li>
        <li className=" flex p-2 items-center text-[#0d78beed]">
          {/* <GiDuffelBag className="text-xl mr-2" /> */}
          <div>Is it possible to tell mpv to act like subtitles don't exist</div>
        </li>
        <li className=" flex p-2 items-center text-[#0d78beed]">
          {/* <GiDuffelBag className="text-xl mr-2" /> */}
          <div>What programming language do matter modelers generally use?</div>
        </li>
        <li className=" flex p-2 items-center text-[#0d78beed]">
          {/* <GiDuffelBag className="text-xl mr-2" /> */}
          <div>Wondering if there is a more efficient way to store level data in my game?</div>
        </li>
        <li className=" flex p-2 items-center text-[#0d78beed]">
          {/* <GiDuffelBag className="text-xl mr-2" /> */}
          <div>Unconventional ranged weapon for primitive sci-fantasy race?</div>
        </li>
        <li className=" flex p-2 items-center text-[#0d78beed]">
          {/* <GiDuffelBag className="text-xl mr-2" /> */}
          <divs>I can't tag my AAC files with meta-data; what can I do instead?</divs>
        </li>
        <li className=" flex p-2 items-center text-[#0d78beed]">
          {/* <GiDuffelBag className="text-xl mr-2" /> */}
          <div>Calculus with degrees</div>
        </li>
        <li className=" flex p-2 items-center text-[#0d78beed]">
          {/* <GiDuffelBag className="text-xl mr-2" /> */}
          <div>Why can't you use lard or dripping in an electric deep fat fryer?</div>
        </li>
        <li className=" flex p-2 items-center text-[#0d78beed]">
          {/* <GiDuffelBag className="text-xl mr-2" /> */}
          <div>Some Doubts about Independence of Perpendicular Vectors</div>
        </li>
        <li className=" flex p-2 items-center text-[#0d78beed]">
          {/* <GiDuffelBag className="text-xl mr-2" /> */}
          <div>I ___(?) your book. It's fantastic. I'll finish it tonight</div>
        </li>
        <li className=" flex p-2 items-center text-[#0d78beed]">
          {/* <GiDuffelBag className="text-xl mr-2" /> */}
          <div>Solo single author paper vs the comfort of having you advisor on the paper?</div>
        </li>
        <li className=" flex p-2 items-center text-[#0d78beed]">
          {/* <GiDuffelBag className="text-xl mr-2" /> */}
          <div>Aligning matrices in a nice way</div>
        </li>
        <li className=" flex p-2 items-center text-[#0d78beed]">
          {/* <GiDuffelBag className="text-xl mr-2" /> */}
          <div>Story about death of last people on Earth and what happened with Earth after that</div>
        </li>
        <li className=" flex p-2 items-center text-[#0d78beed]">
          {/* <GiDuffelBag className="text-xl mr-2" /> */}
          <div>QGIS 3.30 Creating a ring using an overlapping and fully contained polygon</div>
        </li>
      </ul>
    </>
  );
}
