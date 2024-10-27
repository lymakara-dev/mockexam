import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

function ClassCard() {
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
    <div className="flex flex-row gap-4">
      {list.map((item, index) => (
        <Card
          shadow="sm"
          key={index}
          isPressable
          onPress={() => console.log("item pressed")}
          className="w-[185px] h-[279px] p-[12px] flex flex-col items-cente"
        >
          <CardBody className="grow-0">
            <Image
              radius="none"
              width="100%"
              alt={item.title}
              className="w-[115px] h-[120px]"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="grow flex flex-col p-0 pt-[10px] items-start">
            <p className="grow text-[16px] font-normal​​ font-medium">
              {item.title}
            </p>
            <div className="grow-0">
              <div className="flex flex-row gap-1">
                <Image src="/svg/clock.svg" />
                <p className="text-default-500">{item.time}</p>
              </div>
              <div className="flex flex-row gap-1">
                <Image src="/svg/calendar-date-range.svg" />
                <p className="text-default-500">{item.date}</p>
              </div>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

export default ClassCard;
