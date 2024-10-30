import App from "@/components/sidebar";
import React from "react";
import MyNavBar from "@/components/MyNavBar";

function page() {
  return (
<div className="flex flex-col-reverse md:flex-row">
  <App />
  <MyNavBar />
</div>
  );
}

export default page;
