"use client";
import React, { useEffect } from "react";
import {
  HomeIcon,
  UserCircleIcon,
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/solid";

const icons = {
  home: HomeIcon,
  user: UserCircleIcon,
  clipboard: ClipboardDocumentListIcon,
};

type IconType = keyof typeof icons;

const IconComponent: React.FC<{ icon: IconType }> = ({ icon }) => {
  const Icon = icons[icon];
  return <Icon className="h-6 w-6 text-common-gray" />;
};

import {
  Modal,
  ModalContent,
  ModalBody,
  Button,
  useDisclosure,
  extendVariants,
  ModalHeader,
} from "@nextui-org/react";
import Router from "next/router";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MyNavBar from "./MyNavBar";

const Sidebar = extendVariants(Modal, {
  variants: {
    height: {
      "half-full": {
        base: "max-h-full",
      },
      half: {
        base: "max-h-full",
      },
      full: {
        base: "h-full",
      },
    },
    placement: {
      left: {
        wrapper: [
          "fixed",
          "top-0",
          "left-0",
          "bottom-0",
          "items-start",
          "w-[230px]", // Width of the sidebar
          "sm:items-start",
          "[--scale-enter:100%]",
          "[--scale-exit:100%]",
          "[--opacity-enter:100%]",
          "[--opacity-exit:0%]",
          "[--slide-y-enter:0px]",
          "[--slide-y-exit:0px]",
          "[--slide-x-enter:0px]",
          "[--slide-x-exit:-200px]", // Ensure sliding from the left
          "sm:[--scale-enter:100%]",
          "sm:[--scale-exit:100%]",
          "justify-start",
        ],
        base: ["m-0", "sm:m-0", "rounded-none"],
        closeButton: ["right-3", "top-3"],
        header: ["pr-12"],
      },
    },
  },
  defaultVariants: {
    size: "md",
    height: "full",
    shadow: "sm",
    placement: "left", // Default to left placement
    backdrop: "opaque",
    scrollBehavior: "inside",
  },
});

function Sidebars() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleOpen = () => {
    onOpen();
  };
  const pathname = usePathname();

  return (
    <div className="flex h-screen min-h-screen">
      
        <div className="flex flex-col gap-2 bg-common-blue h-full">
          {/* Sidebar Content for Larger Screens */}
          
          <div className="hidden md:flex md:flex-col   text-white w-[230px] h-full   ">
            <div className="flex flex-col gap-1 p-4">
              <img
                src="/img/logo_IMG&Title.png"
                alt="Logo"
                className="whitespace-normal"
              />
              <div className="flex-col flex mt-5">
                <Link href="/">
                  <button
                    className={`flex text-common-gray hover:text-white focus:text-white gap-4 pb-[1rem]  rounded-[10px] px-4 py-3 w-full hover:bg-common-white  focus:bg-common-white ${pathname == "/" ? "bg-common-white text-white" : ""}`}
                  >
                    <HomeIcon className="h-6 w-6   " />
                    <span className="pt-[0.1rem]">ថ្នាក់ប្រលង</span>
                  </button>
                </Link>
                {/* <p className="mb-2 mt-3 text-red-500 font-bold">Coming soon!!</p> */}
                <Link href={"/history"}>
                  <button
                    className={`flex text-common-gray hover:text-white focus:text-white gap-4 pb-[1rem]  rounded-[10px] px-4 py-3 w-full hover:bg-common-white  focus:bg-common-white ${pathname == "/history" ? "bg-common-white text-white" : ""}`}
                  >
                    <ClipboardDocumentListIcon className="h-6 w-6   " />
                    <span className="pt-[0.1rem]">ប្រវត្តិការប្រលង</span>
                  </button>
                </Link>

                <button
                  disabled
                  className={`flex text-common-gray hover:text-white focus:text-white gap-4 pb-[1rem]  rounded-[10px] px-4 py-3 w-full hover:bg-common-white  focus:bg-common-white`}
                >
                  <UserCircleIcon className="h-6 w-6   " />
                  <span className="pt-[0.1rem]">គណនី</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
}

export default Sidebars;
