"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import Page from "./Questions";
import Exambar from "./Exambar";

export const runtime = "edge";

function page() {
  const router = useParams();
  const { slug } = router;

  const [start, setStart] = useState<boolean>(false);
  return (
    <div className="flex justify-center items-center flex-col">
      <Exambar />
      {start ? "" : <Page />}
    </div>
  );
}

export default page;
