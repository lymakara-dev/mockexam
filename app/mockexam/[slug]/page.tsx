"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import Page from "./Questions";


export const runtime = "edge";

function page() {
  const router = useParams();
  const { slug } = router;

  const [start, setStart] = useState<boolean>(false);
  return<>
    
    {start? "<p>Hello</p" : <Page/>}
  </> 
  }
  
  export default page;
