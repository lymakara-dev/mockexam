"use client";

import React from "react";
import ExamCard from "@/components/card";
import { Image } from "@nextui-org/image";

function ExamPage() {
  const list = [
    {
      title: "ការប្រលងគណិតគណនា",
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
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-row gap-2">
        <Image
          src="/images/orng.jpeg"
          width="100%"
          className="rounded-full w-[64px] h-[64px]"
        />
        <div className="flex flex-col justify-center gap-1">
          <p className="text-xl font-normal not-italic text-[#64748B]">
            ស្វាគមន៍,&nbsp;
            <span>ឃាង អួយអ័ង</span>
          </p>
          <a
            href="#"
            className="text-base font-normal not-italic text-[#64748B]"
          >
            មើលប្រូហ្វាល់ &gt;
          </a>
        </div>
      </div>
      <p className="text-2xl not-italic font-medium text-[#64748B] mt-5">
        ថ្នាក់ប្រលង
      </p>

      <div className="flex flex-col gap-4 md:flex-row items-center flex-wrap">
        {list.map((item, index) => (
          <ExamCard
            key={index}
            title={item.title}
            img={item.img}
            time={item.time}
            date={item.date}
          />
        ))}
      </div>
    </div>
  );
}

export default ExamPage;
