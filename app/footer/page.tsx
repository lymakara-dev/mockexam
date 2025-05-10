import React from "react";
import Link from "next/link";
import Image from "next/image"; // Import the Image component
import logo from "../../public/Auth/GIC_Logo.png";
import { UserCircleIcon, PhoneIcon, EnvelopeIcon, } from "@heroicons/react/24/solid";
import facebook from "../../public/icons/Facebook.svg";
import telegram from "../../public/icons/Telegram.svg";
import github from "../../public/icons/Github.svg";
import youtube from "../../public/icons/Youtube.svg";

const icons = {
  User: UserCircleIcon,
  Phone: PhoneIcon,
  Envelope: EnvelopeIcon,
};

type IconType = keyof typeof icons;

const IconComponent: React.FC<{ icon: IconType }> = ({ icon }) => {
  const Icon = icons[icon];
  return <Icon className="h-6 w-6 text-common-gray" />;
};

const footer = () => {
  facebook
  return (
    <>
      <div className="w-full h-[30vh] bg-common-blue  flex justify-between pl-[60px] pr-[60px]">

        <div className="flex items-center">
          <Image src={logo} alt="Logo" width={100} height={60} />
        </div>

        <div className="text-white text-[20px] flex flex-col justify-evenly gap-y-4 items-center">
          <div className="flex justify-end w-full  ">
            <p>ទំនាក់ទំនងមកកាន់ពួកយើង</p>
          </div>
          <div className="flex flex-col flex-end  w-full ">

            <div className="flex items-center space-x-4 w-ful justify-end">
              <p>099 999 666</p>
              <PhoneIcon className="w-6 h-6 " />
            </div>



            <div className="flex items-center space-x-4 w-full justify-end">
              <p>mockexam.itc@gmail.com</p>
              <EnvelopeIcon className="w-6 h-6 " />
            </div>
          </div>
        </div>

      </div>

      <div className="flex flex-row text-white justify-between  bg-common-blue pl-[60px] pr-[60px] border-t h-[64px] ">

        <div className="flex items-center">
          <p>© 2024 GIC 25<sup className="text-xs align-super">th</sup>Student</p>
        </div>

        <div className="flex items-center">

          <div className="p-[10px]">
            <Image src={telegram} alt="telegram" />
          </div>
          <div className="p-[10px]">
            <Image src={facebook} alt="facebook" />
          </div>
          <div className="p-[10px]">
            <Image src={github} alt="github" />
          </div>
          <div className="p-[10px]">
            <Image src={youtube} alt="youtube" />
          </div>

        </div>
      </div>
    </>
  );
};

export default footer;
