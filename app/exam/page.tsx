"use client";

import React, { useEffect, useState } from "react";
import { IoPersonCircleOutline } from "react-icons/io5";

import ExamCard from "@/components/card";


function ExamPage() {
  const [name,setName] = useState('Default');
  const list = [
    {
      title: "ការប្រលងគណិតវិទ្យា",
      href: "/mockexam/Math",
      img: "/images/cal.png",
      price: "$5.50",
      time: new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      }),
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    },

    {
      title: "ការប្រលងតក្កវិទ្យា",
      href: "/mockexam/IQ",
      img: "/images/logic.png",
      price: "$5.50",
      time: new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      }),
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    },

    {
      title: "ការប្រលងរូបវិទ្យា",
      href: "/mockexam/Physics",
      img: "/images/physic.png",
      price: "$5.50",
      time: new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      }),
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    },

    {
      title: "ការប្រលងគីមីវិទ្យា",
      href: "/mockexam/Chemistry",
      img: "/images/chemistry.png",
      price: "$5.50",
      time: new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      }),
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    },
  ];

  useEffect(()=>{
    const name1 = document.cookie;
    const email = name1.split("authenticated=")[1];
    setName(email)
  },[])

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-row gap-2">
        <IoPersonCircleOutline className="w-12 h-full" />
        <div className="flex flex-col justify-center gap-1">
          <p className="text-xl font-normal not-italic text-[#64748B]">
            ស្វាគមន៍,&nbsp;
            <span>{name}</span>
          </p>
          <p
            className="text-base font-normal not-italic text-[#64748B]"            
          >
            មើលប្រូហ្វាល់ &gt;
          </p>
        </div>
      </div>
      <p className="text-2xl not-italic font-medium text-[#64748B] mt-5">
        ថ្នាក់ប្រលង
      </p>

      <div className="flex flex-col gap-4 md:flex-row items-center flex-wrap">
        {list.map((item, index) => (
            <ExamCard
              key={index}
              date={item.date}
              href={item.href}
              img={item.img}
              time={item.time}
              title={item.title}
            />
        ))}
      </div>
    </div>
  );
}

export default ExamPage;
