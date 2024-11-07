"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import Image from "next/image";
import { Input } from "@nextui-org/input";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import Link from "next/link";

import Loading from "../signup/Loading";

interface Quiz2 {
  email: string;
  password: string;
}
let users: Quiz2[] = [];
const SigninPage = () => {
  const [response, setResponse] = useState(false);
  const [check, setCheck] = useState(false);
  const router = useRouter();

  const getForm = async () => {
    const clientId = "id-ff33fd67-2662-23d2-e387-7e660796b71";
    const clientSecret = "secret-16433662-63e6-dea2-91b5-c0be0d0db7c";
    const tokenUrl = "https://techbox.developimpact.net/o/oauth2/token";

    // Fetch the access token
    const response = await fetch(tokenUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "client_credentials",
        client_id: clientId,
        client_secret: clientSecret,
      }),
    });

    if (response.ok) {
      const data = await response.json();

      fetchRecord(data.access_token);
    } else {
      console.log("Error obtaining token");
    }
  };

  function fetchRecord(accessToken: string) {
    const url = "https://techbox.developimpact.net/o/c/users/?pageSize=-1";

    // Clear the users array to avoid duplication
    users.length = 0;

    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        return response.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          data.forEach((record) => {
            users.push(record); // Push each record to the users array
          });
        } else {
          if (data.items && Array.isArray(data.items)) {
            data.items.forEach((record: Quiz2) => {
              users.push(record);
            });
            setResponse(true);
          } else {
            // console.log("Unexpected data format:", data);
          }
        }
      })
      .catch((error) => {
        console.log("Error fetching records:", error);
      });
  }
  useEffect(() => {
    getForm();
  }, []);
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [BtnInit, setBtnInit] = useState<string>("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setEmailError(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? true : false);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordError(value.length >= 8 ? true : false);
  };

  const handlelogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!emailError) {
      setBtnInit("Invalid email address");
    } else if (!passwordError) {
      setBtnInit("Password must be at least 8 characters");
    } else {
      const user = users.find(
        (u) => u.email === email && u.password === password
      );
      if (user) {
        // console.log("Form submitted successfully!");
        setCheck(true);
        setTimeout(() => {
          setCheck(false);
          Cookies.set("authenticated", email, { expires: 1 });
          router.push("/");
        }, 1300);
      } else {
        setBtnInit("Cannot find your account");
      }
    }
  };
  return (
    <>
      <section className="bg-[#EBF1FA] flex justify-center items-center w-screen h-screen">
        {check ? <Loading /> : ""}
        {check ? <Loading /> : ""}
        <div className=" container rounded-2xl md:grid-cols-2 grid-cols-1 py-12 md:py-0 grid bg-white md:w-[60%] w-[80%]">
          <div className="left flex flex-col justify-center items-center gap-3">
            <Image
              alt="ITC logo"
              className=""
              height={250}
              src={"/Auth/ITCLogo.png"}
              width={250}
            />
            <form onSubmit={handlelogin}>
              <div className="my-3">
                <Input
                  className="border-1 border-gray-500 rounded-xl"
                  endContent={<MdOutlineEmail />}
                  name="email"
                  placeholder="អ៊ីម៉ែល"
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                />
                {emailError && (
                  <p className="text-red-500 text-sm">{emailError}</p>
                )}
              </div>
              <div className="mb-4">
                <Input
                  className="border-1 border-gray-500 rounded-xl"
                  name="password"
                  placeholder="លេខសម្ងាត់"
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  endContent={<RiLockPasswordFill />}
                />
                {passwordError && (
                  <p className="text-red-500 text-sm">{passwordError}</p>
                )}
              </div>
              <p className=" text-center text-red-500 text-sm mt-2">
                {BtnInit}
              </p>
              <button
                className="shadow-submit py-2 rounded-2xl dark:shadow-submit-dark flex w-full items-center justify-center bg-blue-800 text-base font-medium text-white duration-300 hover:bg-primary/90"
                type="submit"
              >
                ចូល
              </button>
              <div className="flex justify-center items-center w-full">
                <span className=" h-[1px] w-full max-w-[60px] bg-gray-500 sm:block" />
                <p className="text-gray-500 px-4">បង្កើតគណនី</p>
                <span className="bg-gray-500 h-[1px] w-full max-w-[60px] sm:block" />
              </div>
              <Link href={"/signup"} className="w-[55%]">
                <button className="w-full shadow-submit py-2 rounded-2xl dark:shadow-submit-dark flex items-center justify-center border-1 border-blue-600 bg-white text-base font-medium text-blue-600 duration-300 hover:bg-blue-900">
                  ចុះឈ្មោះ
                </button>
              </Link>
            </form>
            <p>Made by <strong>25<sup>th</sup> GIC student</strong></p>
          </div>
          <div className="md:flex hidden right justify-end aspect-square w-full">
            <Image
              alt="ITC campus"
              className="aspect-square rounded-br-2xl rounded-tr-2xl"
              height={0}
              sizes="100vw"
              src={"/Auth/back.jpeg"}
              style={{ width: "100%", height: "100%" }}
              width={0}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default SigninPage;
