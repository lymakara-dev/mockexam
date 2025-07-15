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
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status

  const [isDialogOpen, setIsDialogOpen] = useState(false); // Track dialog visibility
  const [password, setPassword] = useState(""); // Track password input
  const [isSuccessDialogOpen, setIsSuccessDialogOpen] = useState(false); // Track success dialog visibility
  const predefinedPassword = "123456"; // Predefined password

  const menuItems = [
    {
      id: 1,
      title: "Purpose",
      href: "/",
    },
    {
      id: 2,
      title: "Who are we?",
      href: "/en/about",
    },
    {
      id: 3,
      title: "Contact Us",
      href: "/en/contact",
    },
  ];

  // Handle menu item click
  const handleMenuClick = (index: number) => {
    setActiveIndex(index);
    setIsMenuOpen(false); // Close the mobile menu after a click
  };

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-[#F1F5F9]">
      <NavbarContent justify="start">
        <NavbarMenuToggle
          aria-label="Toggle navigation"
          className={`sm:hidden transition-transform duration-300  ${isMenuOpen ? "rotate-90" : ""}`}
        />
        <NavbarBrand className="flex items-center gap-2 ">
          <img
            src="/navbar_images/MES_LOGO_WEB.png"
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            className="w-24 h-auto md:w-32"
          />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={item.id} isActive={activeIndex === index}>
            <Link
              aria-current={activeIndex === index ? "page" : undefined}
              className={`h-[40px] px-4 w-auto min-w-[92px] rounded-[100px] items-center justify-center 
                  ${
                    activeIndex === index
                      ? "bg-primary text-white"
                      : " text-gray-800 hover:bg-primary hover:text-white"
                  } 
                  transition-colors`}
              href={item.href}
              onPress={() => handleMenuClick(index)}
            >
              {item.title}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <LanguageSwitcher />
          {/* <ThemeSwitch /> */}
        </NavbarItem>
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

      <NavbarMenu className={isMenuOpen ? "block" : "hidden"}>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className={`w-full ${
                activeIndex === index ? "text-blue-600" : "text-gray-800"
              } transition-colors`}
              href={item.href}
              size="lg"
              onPress={() => handleMenuClick(index)}
            >
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>

      {/* Login / Sign Up Dialog */}
      {/* {isDialogOpen && (
          <div className='dialog'>
            <h2>{t.enterPassword}</h2>
            <form onSubmit={handleSubmit}>
              <label>
                {t.password}:
                <input
                  required
                  type='password'
                  value={password}
                  onChange={handlePasswordChange}
                />
              </label>
              <button type='submit'>{t.submit}</button>
            </form>
            <button onClick={() => setIsDialogOpen(false)}>{t.close}</button>
          </div>
        )} */}

      {/* Success Dialog */}
      {/* {isSuccessDialogOpen && (
          <div className='dialog'>
            <h2>{t.success}</h2>
            <p>{t.passwordCorrect}</p>
            <button onClick={closeSuccessDialog}>{t.close}</button>
          </div>
        )} */}
      <style jsx>{`
        .dialog {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          padding: 20px;
          background-color: white;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          z-index: 999;
        }
        button {
          margin-top: 10px;
          padding: 10px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        button:hover {
          background-color: #0056b3;
        }
        input {
          margin-top: 10px;
          padding: 8px;
          width: 100%;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        h2 {
          margin-bottom: 10px;
        }
      `}</style>
    </Navbar>
  );
}
