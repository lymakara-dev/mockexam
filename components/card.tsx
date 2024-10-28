import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

// Define the prop types
interface ExamCardProps {
  title: string;
  img: string;
  time: string;
  date: string;
}

const ExamCard: React.FC<ExamCardProps> = ({ title, img, time, date }) => {
  return (
    <Card
      shadow="sm"
      isPressable
      onPress={() => console.log("item pressed")}
      className="w-[185px] h-[279px] p-[12px] flex flex-col items-cente"
    >
      <CardBody className="grow-0">
        <Image
          radius="none"
          width="100%"
          alt={title}
          className="w-[115px] h-[120px]"
          src={img}
        />
      </CardBody>
      <CardFooter className="grow flex flex-col p-0 pt-[10px] items-start">
        <p className="grow text-[16px] font-normal​​ font-medium">{title}</p>
        <div className="grow-0">
          <div className="flex flex-row gap-1">
            <Image src="/svg/clock.svg" />
            <p className="text-default-500">{time}</p>
          </div>
          <div className="flex flex-row gap-1">
            <Image src="/svg/calendar-date-range.svg" />
            <p className="text-default-500">{date}</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ExamCard;
