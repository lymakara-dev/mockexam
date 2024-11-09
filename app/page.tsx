"use client";
import MyNavBar from "@/components/MyNavBar";
import Sidebars from "@/components/sidebar";
import React from "react";
import ExamPage from "./exam/page";
import { signIn } from "next-auth/react";

function page() {
  return (
    <div className="flex">
      <Sidebars />
      <div className="flex flex-col flex-grow">
        <MyNavBar />
        <div className="p-6">
          <ExamPage />
        </div>
        <button onClick={() => signIn("google")}>singin</button>
      </div>
    </div>
  );
}

export default page;
