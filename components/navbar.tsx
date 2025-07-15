"use client";
import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@heroui/react";
import { BellIcon, ProfileIcon } from "./icons";
import { ThemeSwitch } from "./theme-switch";
import LanguageSwitcher from "./NavBar/LanguageSwitch";

interface NavbarComponentProps {
  locale: string;
  translations: Record<string, string>;
}

// Main Navbar Component
export default function NavbarComponent({
  locale,
  translations: t,
}: NavbarComponentProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isLoggedIn] = useState(false); // Track login status

  const menuItems = [
    { id: 1, title: "Purpose", href: "/" },
    { id: 2, title: "Who are we?", href: "/about" },
    { id: 3, title: "Contact Us", href: "/contact" },
  ];

  // Handle menu item click
  const handleMenuClick = (index: number) => {
    setActiveIndex(index);
    setIsMenuOpen(false); // Close the mobile menu after a click
  };

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="h-20 md:px-[100px] py-8 flex justify-evenly items-center"
    >

      {/* Brand & Mobile Toggle */}
      <NavbarContent justify="start" className="gap-2">
        {/* <NavbarMenuToggle
          aria-label="Toggle navigation"
          className={`sm:hidden transition-transform duration-300  ${isMenuOpen ? "rotate-90" : ""}`}
        /> */}
        <NavbarBrand className="flex items-center gap-2 ">
          <img
            src="/navbar_images/MES_LOGO_WEB.png"
            alt="MES Logo"
            className="h-8 w-auto md:h-12"
          />
        </NavbarBrand>
      </NavbarContent>

      {/* Center Nav Links */}
      <NavbarContent
        className="hidden sm:flex gap-6 lg:gap-8 text-base lg:text-lg font-medium "
        justify="center"
      >
        {menuItems.map((item, index) => (
          <NavbarItem key={item.id} isActive={activeIndex === index}>
            <Link
              aria-current={activeIndex === index ? "page" : undefined}
              className={`relative px-3 py-1.5 rounded-full transition-colors duration-200 hover:bg-primary-500/10 dark:hover:bg-primary-400/10 ${activeIndex === index
                  ? "text-primary-600 dark:text-primary-400 font-semibold "
                  : "text-gray-700 dark:text-gray-200"
                }`}
              href={item.href}
              onPress={() => handleMenuClick(index)}
            >
              {item.title}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Right Actions */}
      <NavbarContent justify="end" className="gap-3">
        <NavbarItem>
          <LanguageSwitcher />
        </NavbarItem>
        <NavbarMenuToggle
          aria-label="Toggle navigation"
          className={`sm:hidden transition-transform duration-300  ${isMenuOpen ? "rotate-90" : ""}`}
        />
        <NavbarItem className="hidden sm:flex">
          <ThemeSwitch />
        </NavbarItem>
        {isLoggedIn && (
          <>
            <NavbarItem className="hidden sm:flex">
              <BellIcon className="h-5 w-5 text-gray-500 dark:text-gray-400 cursor-pointer" />
            </NavbarItem>
            <NavbarItem className="hidden sm:flex">
              <ProfileIcon className="h-6 w-6 text-gray-500 dark:text-gray-400 cursor-pointer" />
            </NavbarItem>
          </>
        )}
      </NavbarContent>

      
    </Navbar>
  );
}
