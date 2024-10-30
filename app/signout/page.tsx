"use client";
import Cookies from "js-cookie";
import React, { useEffect } from "react";

function page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    Cookies.remove("authenticated");
  }, []);

  return <div>You are signout
      <a href="/" className="text-blue-600">  Go back to Home</a>
  </div>;
}

export default page;
