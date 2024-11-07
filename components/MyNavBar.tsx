"use client";
import React, { useState, useEffect, useRef } from "react";
import { PiSignOutBold } from "react-icons/pi";
import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/solid";

const icons = {
  bars: Bars3Icon,
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
import { ThemeSwitch } from "./theme-switch";
import { tree } from "next/dist/build/templates/app-page";
import Router from "next/router";

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
          "w-full",
          "[--slide-x-enter:0px]",
          "[--slide-x-exit:-200px]",
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
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const { onOpen, isOpen: sidebarOpen, onOpenChange } = useDisclosure();

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Handle clicks outside of the dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current) {
        closeMenu();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      {/* Navbar container */}
      <div className="dark:bg-common-blue flex w-full h-[56px] p-[10px_16px] md:justify-end justify-between items-center md:bg-white bg-common-blue shadow-md relative">
        {/* Logo for Mobile */}
        <div className="flex items-center md:hidden">
          <img src="/img/logo_IMG&Title.png" alt="" className="h-10 " />
        </div>
        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex items-center">
          <button className="w-11 h-11 hover:bg-common-white active:bg-common-white flex items-center justify-center rounded-full">
            <Bars3Icon className="text-white w-6 h-6" />
          </button>
        </div>

        {/* Navigation Links for Desktop */}
        <ul className="hidden md:flex gap-x-6 text-black items-center">
          <li className="flex items-center">{/* <ThemeSwitch /> */}</li>
          {/* <li>
            <Link href="/">
              <img
                src="/img/notification.png"
                alt="Notification setting Icon"
              />
            </Link>
          </li>
          <li>
            <Link href="/">
              <img src="/img/flag_kh.png" alt="flag of language Icon" />
            </Link>
          </li> */}
          {/* <li>
            <Link href="/">
              <img src="/img/fullscr.png" alt="Fullscreen or normal Icon" />
            </Link>
          </li> */}
          <li>
            <Link href="/signout">
              <PiSignOutBold className="w-6 h-full" />
            </Link>
          </li>
        </ul>
      </div>

      {/* Sidebar for Mobile */}
      <Sidebar
        placement="left"
        isOpen={sidebarOpen}
        height={"full"}
        onOpenChange={onOpenChange}
      >
        <ModalContent className="bg-common-blue">
          <ModalHeader>
            <img src="/img/logo_IMG&Title.svg" alt="" />
          </ModalHeader>
          <ModalBody className="flex flex-col">
            <Link href={"/exam"}>
              <button className="flex items-center gap-x-6 pb-[0.5rem] ">
                <span className="mt-1 ">ថ្នាក់ប្រលង</span>
              </button>
            </Link>
            <p className="mb-2 mt-3 text-red-500 font-bold">Coming soon!!</p>
            <button className="flex items-center text-white gap-x-6 pb-[0.5rem]">
              <img src="/img/clipboard-document-check.svg" alt="" />
              <span className="mt-1">ប្រវត្តិការប្រលង</span>
            </button>
            <button className="flex items-center text-white gap-x-6 pb-[0.5rem]">
              <img src="/img/user-circle.png" alt="" />
              <span className="mt-1">គណនី</span>
            </button>
            <button className="flex items-center text-white gap-x-6 pb-[0.5rem]">
              <img
                src="/img/language.png"
                alt="language switch"
                className="w-6"
              />
              <span className="mt-1">ភាសារ</span>
            </button>
            <button className="flex items-center text-white gap-x-4  pb-[0.5rem]">
              <img
                src="/img/noti.png"
                alt="notification ring"
                className="w-10 -ml-2"
              />
              <span className="mt-1">ជូនដំណឹង</span>
            </button>
            <button className="flex items-center text-white gap-x-6 pb-[0.5rem]">
              <img src="/img/full.png" alt="full xd" />
              <span className="mt-1">មើលពេញ</span>
            </button>
            <button className="flex items-center text-white gap-x-6 pb-[0.5rem]">
              {/* <ThemeSwitch /> */}
              <span className="mt-1"> ម៉ូត</span>
            </button>
          </ModalBody>
        </ModalContent>
      </Sidebar>
    </>
  );
};

export default MyNavBar;
