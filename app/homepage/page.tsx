import React from "react";
import Link from "next/link";
import Image from "next/image"; // Import the Image component
import logo from "../../public/Auth/GIC_Logo.png";
import { UserCircleIcon } from "@heroicons/react/24/solid";

const icons = {
  User: UserCircleIcon,
};

type IconType = keyof typeof icons;

const IconComponent: React.FC<{ icon: IconType }> = ({ icon }) => {
  const Icon = icons[icon];
  return <Icon className="h-6 w-6 text-common-gray" />;
};

const Navbar = () => {
  return (
    <>
      <div className="w-full h-28 bg-white sticky top-0">
        <div className="container mx-auto px-4 h-full flex justify-between items-center">
          <div className="flex  items-center h-full  ">
            <Link href="">
              <Image src={logo} alt="Logo" width={60} height={100} />{" "}
              
            </Link>
            <ul className=" items-center gap-x-6 text-common-gray px-16  h-12 md:flex hidden">
              <li>
                <Link href="" >
                  <button className=" h-full py-6 px-6 focus:border-b-5 focus:border-common-blue focus:text-common-blue ease-in-out duration-300 ">ទំព័រដើម</button>
                </Link>
              </li>
              <li>
                <Link href="">
                <button className=" h-full py-6 px-6 focus:border-b-5 focus:border-common-blue focus:text-common-blue ease-in-out duration-300 ">មុខងារ</button>
                  
                </Link>
              </li>
              <li>
                <Link href="">
                <button className=" h-full py-6 px-6 focus:border-b-5 focus:border-common-blue focus:text-common-blue ease-in-out duration-300 ">អំពីយើង</button>
                  
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-11 h-11 hover:bg-gray-100 active:bg-common-white flex items-center justify-center rounded-full">
            <UserCircleIcon className="w-6 h-6 text-common-gray " />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
