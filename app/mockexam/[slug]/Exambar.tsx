import { ThemeSwitch } from "@/components/theme-switch";
import React from "react";

const Exambar =({index,length,Subject}:{index:number,length:number,Subject:String}) => {
  return (
    <nav className="flex w-[1200px] text-white justify-between bg-[#0D4DA2] p-2 rounded-[10px]">
      <div className="">
        <div className="flex items-center justify-center gap-2">
          <img src="" alt="" />
          <h1>Math Exam</h1>
          <ThemeSwitch />
        </div>
      </div>
      <div>3/30 Questions</div>
    </nav>
  );
}

export default Exambar;
