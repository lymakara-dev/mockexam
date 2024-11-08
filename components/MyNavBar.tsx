"use client";
import React, { useState, useEffect, useRef } from "react";
import {  } from "react-icons/pi";
import Link from "next/link";
import { Bars3Icon, HomeIcon, UserCircleIcon, ArrowRightStartOnRectangleIcon, } from "@heroicons/react/24/solid";
import {
  Modal,
  ModalContent,
  ModalBody,
  Button,
  useDisclosure,
  extendVariants,
  ModalHeader,
} from "@nextui-org/react";
import { ThemeSwitch } from "./theme-switch";
import ExamPage from "@/app/exam/page";

const icons = {
  
  logout: ArrowRightStartOnRectangleIcon,
};

type IconType = keyof typeof icons;

const IconComponent: React.FC<{ icon: IconType }> = ({ icon }) => {
  const Icon = icons[icon];
  return <Icon className="h-6 w-6 text-common-gray" />;
};


const Sidebar = extendVariants(Modal, {
  variants: {
    height: {
      full: {
        base: "h-full max-h-full",
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
          "w-[70%] md:w-[30%]",
          "[--slide-x-enter:0px]",
          "[--slide-x-exit:-100%]",
          
        ],
        base: ["m-0", "rounded-none"],
        closeButton: [],
        header: ["px-[8px]"],
      },
    },
  },
  defaultVariants: {
    size: "md",
    height: "full",
    shadow: "sm",
    placement: "left",
    backdrop: "opaque",
    scrollBehavior: "inside",
  },
});

const MyNavBar = () => {
  const { onOpen, isOpen: sidebarOpen, onOpenChange } = useDisclosure();
  const [name, setName] = useState(""); // State to store the user's email
  const [isClient, setIsClient] = useState(false); // State to check if the code is running on the client side

  useEffect(() => {
    setIsClient(true); // This ensures that the code below only runs on the client side
  }, []);

  useEffect(() => {
    if (isClient) {
      // Simulating an API call to get the email or username from the cookie or API
      const nameFromCookie = document.cookie.split("authenticated=")[1]; // Extract name from cookie
      if (nameFromCookie) {
        setName(nameFromCookie); // Set the name to the state
      } else {
        fetch("/api/getUser") // Replace with your API endpoint
          .then((response) => response.json())
          .then((data) => {
            if (data && data.email) {
              setName(data.email); // Set email from API response
            }
          })
          .catch((error) => {
            console.error("Error fetching user info:", error);
          });
      }
    }
  }, [isClient]); // Empty dependency array ensures this runs only once when the component mounts

  return (
    <>
      {/* Navbar container */}
      <div className="dark:bg-common-blue flex w-full h-[56px] p-[10px_16px] md:justify-end justify-between items-center md:bg-white bg-common-blue shadow-md relative">
        {/* Logo for Mobile */}
        <div className="flex items-center md:hidden">
          <img src="/img/logo_IMG&Title.png" alt="" className="h-10 " />
        </div>
    {/* fix */}
        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex items-center">
          <button
            className="w-11 h-11 hover:bg-common-white active:bg-common-white flex items-center justify-center rounded-full"
            onClick={onOpen} // Open sidebar
          >
            <Bars3Icon className="text-white w-6 h-6" />
          </button>
        </div>

        {/* Navigation Links for Desktop */}
        <ul className="hidden md:flex gap-x-6 text-black items-center">
          <li className="flex items-center">{/* <ThemeSwitch /> */}</li>
          <li>
            <Link href="/signout">
            <div className="w-11 h-11 hover:bg-common-white active:bg-common-white flex items-center justify-center rounded-full">
            <ArrowRightStartOnRectangleIcon className="w-6 h-6 text-gray-600" />
            </div>
             
            </Link>
          </li>
        </ul>
      </div>

      {/* Sidebar for Mobile */}
      <Sidebar
        placement="left"
        isOpen={sidebarOpen}
        height={"full"}
        onOpenChange={onOpenChange} // Control sidebar visibility // Ensure sidebarOpen state stays in sync
      >
        <ModalContent className="bg-common-blue ">
          <ModalHeader>
            <div className="flex flex-wrap gap-2 ">
              <div className="flex items-center justify-center gap-1  p-4">
                <div className="flex items-center gap-2">
                  <UserCircleIcon className="h-12 w-12 text-common-second-gray" />
                  <p className="text-[14px] font-normal not-italic text-white">
                    <span>ស្វាគមន៍,&nbsp;</span>
                    <br />
                    <span>{name}</span>
                  </p>
                </div>
              </div>
            </div>
          </ModalHeader>
          <ModalBody className="flex flex-col">
            <Link href="/exam">
              <button className="flex items-center gap-x-6 pb-[0.5rem]">
                <img src="/img/homeIcon.svg" alt="Home" />
                <span className="mt-1 text-white">ថ្នាក់ប្រលង</span>
              </button>
            </Link>
            <button className="flex items-center text-white gap-x-6 pb-[0.5rem]">
              <img src="/img/clipboard-document-check.svg" alt="" />
              <span className="mt-1">ប្រវត្តិការប្រលង</span>
            </button>
          </ModalBody>
        </ModalContent>
      </Sidebar>
    </>
  );
};

export default MyNavBar;
