import React from "react";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import CenterMain from "../components/CenterMain";

export default function MainSearchPage() {
  return (
    <main className=" flex w-screen">
      <aside className=" w-2/12">
        <LeftSidebar />
      </aside>
      <article className=" w-7/12">
        <CenterMain />
      </article>
      <aside className=" w-3/12">
        <RightSidebar />
      </aside>
    </main>
  );
}
