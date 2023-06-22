import React from "react";
import LeftSidebar from "../components/MainPageComponents/LeftSidebar";
import CenterMain from "../components/MainPageComponents/CenterMain";
import RightSidebar from "../components/MainPageComponents/RightSidebar";

export default function MainSearchPage() {
  return (
    <div className="max-w-[1265px] mx-auto">
      <div className="flex py-10 ">
        <aside className="fixed w-1.1/12 pr-4">
          <LeftSidebar />
        </aside>
        <article className="ml-[calc(1.6/12*100%)] w-9/12 border-l-2">
          <CenterMain />
        </article>
        <aside className="w-4/12 pl-7 mr-2">
          <RightSidebar />
        </aside>
      </div>
    </div>
  );
}
