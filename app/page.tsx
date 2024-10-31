import React from "react";

import App from "@/components/sidebar";
import MyNavBar from "@/components/MyNavBar";
import ExamPage from "./exam/page";

function page() {
  return (
    <div className="flex flex-grow-0">
      <App />
      <div className="flex flex-col flex-grow">
      <MyNavBar />
        <div>
          {/* Your page content */}
          <h1>Page Content</h1>
          <p>This is a sample page.</p>
          {/* End of page content */}
          <ExamPage/> 
        </div>
      </div>
    </div>
  );
}

export default page;
