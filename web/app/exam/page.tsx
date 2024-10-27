"use client";

import React from "react";
import ClassCard from "@/components/card";
import { Image } from "@nextui-org/image";

function ExamPage() {
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
      <ClassCard />
    </div>
  );
}

export default ExamPage;
