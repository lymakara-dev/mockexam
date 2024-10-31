"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Modal,
  ModalContent,
  ModalBody,
  Button,
  useDisclosure,
  extendVariants,
  ModalHeader,
} from "@nextui-org/react";

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
          "w-[230px]",
          "[--slide-x-enter:0px]",
          "[--slide-x-exit:-200px]",
        ],
        base: ["m-0", "rounded-none"],
        closeButton: ["right-3", "top-3"],
        header: ["pr-12"],
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
      <div className="flex w-full h-[56px] p-[7px_16px] md:justify-end justify-between items-center md:bg-white bg-[#0A3A7A] shadow-md relative">
        {/* Logo for Mobile */}
        <div className="flex items-center md:hidden">
          <img src="/img/logo_IMG&Title.svg" alt="" />
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex items-center">
          <Button
            variant="flat"
            color="warning"
            onPress={onOpen}
            className="bg-[#0A3A7A]"
          >
            <img src="/img/setting.png" alt="Menu logo" />
          </Button>
        </div>

        {/* Navigation Links for Desktop */}
        <ul className="hidden md:flex gap-x-6 text-black items-center">
          <li>
            <Link href="/mode">
              <img src="/img/mode.svg" alt="Mode dark or light Icon" />
            </Link>
          </li>
          <li>
            <Link href="/notification">
              <img
                src="/img/notification.png"
                alt="Notification setting Icon"
              />
            </Link>
          </li>
          <li>
            <Link href="/flag_kh">
              <img src="/img/flag_kh.png" alt="flag of language Icon" />
            </Link>
          </li>
          <li>
            <Link href="/fullscr">
              <img src="/img/fullscr.png" alt="Fullscreen or normal Icon" />
            </Link>
          </li>
          <li>
            <Link href="/user-circle">
              <img src="/img/user-circle.png" alt="User setting Icon" />
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
        <ModalContent className="bg-[#0A3A7A]">
          <ModalHeader>
            <img src="/img/logo_IMG&Title.svg" alt="" />
          </ModalHeader>
          <ModalBody className="flex flex-col">
            <button className="flex items-start text-white gap-x-6 pb-[0.5rem]">
              <img src="/img/homeIcon.svg" alt="" />
              <span className="mt-1">ថ្នាក់ប្រលង</span>
            </button>
            <button className="flex items-start text-white gap-x-6 pb-[0.5rem]">
              <img src="/img/clipboard-document-check.svg" alt="" />
              <span className="mt-1">ប្រវត្តិការប្រលង</span>
            </button>
            <button className="flex items-start text-white gap-x-6 pb-[0.5rem]">
              <img src="/img/user-circle.png" alt="" />
              <span className="mt-1">គណនី</span>
            </button>
            <button className="flex items-start text-white gap-x-6 pb-[0.5rem]">
              <img src="/img/Language.png" alt="language switch" />
              <span className="mt-1">ភាសារ</span>
            </button>
            <button className="flex items-start text-white gap-x-6 pb-[0.5rem]">
              <img src="/img/noti.png" alt="notification ring " />
              <span className="mt-1">ជូនដំណឹង</span>
            </button>
            <button className="flex items-start text-white gap-x-6 pb-[0.5rem]">
              <img src="/img/full.png" alt="full xd" />
              <span className="mt-1">មើលពេញ</span>
            </button>
            <button className="flex items-start text-white gap-x-6 pb-[0.5rem]">
              <img src="/img/mode-icon.svg" alt="Mode" />
              <span className="mt-1"> ម៉ូត</span>
            </button>
          </ModalBody>
        </ModalContent>
      </Sidebar>
    </>
  );
};

export default MyNavBar;
