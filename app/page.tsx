import MyNavBar from "@/components/MyNavBar";
import App from "@/components/sidebar";
import React from "react";
import ExamPage from "./exam/page";

function page() {
  return (
    <div className="flex">
      <App />
      <div className="flex flex-col flex-grow">
        <MyNavBar />
        <div className="p-5">
          <ExamPage />
        </div>
      </div>
    </div>
  );
}

export default page;
