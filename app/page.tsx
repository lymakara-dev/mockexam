import MyNavBar from "@/components/MyNavBar";
import Sidebars from "@/components/sidebar";
import React from "react";
import ExamPage from "./exam/page";

function page() {
  return (
    <div className="flex">
      <Sidebars />
      <div className="flex flex-col flex-grow">
        <MyNavBar />
        <div className="p-5 flex flex-col gap-4 font-bold"></div>
      </div>
    </div>
  );
}

export default page;
