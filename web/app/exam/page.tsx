"use client";

import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

function ExamPage() {
  const list = [
    {
      title: "ការប្រលងគណិត",
      img: "/images/cal.png",
      price: "$5.50",
    },
    {
      title: "Tangerine",
      img: "/images/fruit-2.jpeg",
      price: "$3.00",
    },
    {
      title: "Raspberry",
      img: "/images/fruit-3.jpeg",
      price: "$10.00",
    },
    {
      title: "Lemon",
      img: "/images/fruit-4.jpeg",
      price: "$5.30",
    },
    {
      title: "Avocado",
      img: "/images/fruit-5.jpeg",
      price: "$15.70",
    },
    {
      title: "Lemon 2",
      img: "/images/fruit-6.jpeg",
      price: "$8.00",
    },
    {
      title: "Banana",
      img: "/images/fruit-7.jpeg",
      price: "$7.50",
    },
    {
      title: "Watermelon",
      img: "/images/fruit-8.jpeg",
      price: "$12.20",
    },
  ];
  return (
    <div className="bg-red-700">
      {list.map((item, index) => (
        <Card
          shadow="sm"
          key={index}
          isPressable
          onPress={() => console.log("item pressed")}
          className="w-[185px] h-[279px] p-[12px] flex flex-col items-cente"
        >
          <CardBody className="bg-blue-600 grow-0">
            <Image
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-[115px] h-[120px]"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="grow flex flex-col bg-red-500 items-start">
            <p className="text-[16px] font-normal bg-blue-700">{item.title}</p>
            <p className="text-default-500">{item.price}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

export default ExamPage;
