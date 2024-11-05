"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import Page from "./Questions";

export const runtime = "edge";

function page() {
  const router = useParams();
  const { slug } = router;

  const [start, setStart] = useState<boolean>(false);
  return (
    <div className='flex flex-grow justify-center items-center flex-col'>
      {start? "" : <Page/>}
    </div>
  );
}

export default page;
