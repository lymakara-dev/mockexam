"use client";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";


function page() {
  const router = useRouter();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    Cookies.remove("authenticated");
    router.push('/signin')
  }, []);

  return <>signed out</>
}

export default page;
