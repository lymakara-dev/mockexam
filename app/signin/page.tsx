"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import Image from "next/image";
import { Input } from "@nextui-org/input";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import Link from "next/link";
import back from "../../public/Auth/back.jpeg";
import GIC from "../../public/Auth/ITCLogo.png";
import Loading from "../signup/Loading";
import { EnvelopeIcon, LockClosedIcon, } from "@heroicons/react/24/solid";

const icons = {
  mail: EnvelopeIcon ,
  lock: LockClosedIcon,
  
};

type IconType = keyof typeof icons;

const IconComponent: React.FC<{ icon: IconType }> = ({ icon }) => {
  const Icon = icons[icon];
  return <Icon className="h-6 w-6 text-common-gray" />;
};

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
      setBtnInit("មិនទាន់មានគណនី​ សូមបង្កើតគណនី");
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
  const newLocal = "my-3";
  return (
    <div className=" flex items-center justify-center h-screen w-full">
      <div className="bg-white w-[50vw] h-[60vh] flex rounded-3xl max-md:w-[80vw] max-md:h-[50vh] max-lg:h-[60vh] max-lg:w-[40vw] ">
     
      <div className="flex flex-col w-1/2   max-md:w-full max-lg:w-[50vw] items-center justify-center    ">
      <Image src={GIC} alt="GICLogo" width={250} height={250} className="mb-4" />
      <div className="flex flex-col w-[80%]  ">
      <form onSubmit={handlelogin}>
              <div className={newLocal}>
                <Input
                  className="border-1 border-gray-500 rounded-xl flex"
                  endContent={<EnvelopeIcon className=" w-5 h-5 text-gray-500" />}
                  name="email"
                  placeholder="អ៊ីម៉ែល"
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                />
                {emailError && (
                  <p className="text-red-500 text-sm​​ gap-1">{emailError}</p>
                )}
              </div>
              <div className="mb-4">
                <Input
                  className="border-1 border-gray-600 rounded-xl"
                  name="password"
                  placeholder="លេខសម្ងាត់"
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  endContent={<LockClosedIcon className="w-5 h-5 text-gray-600" />}
                />
                {passwordError && (
                  <p className="text-red-500 text-sm">{passwordError}</p>
                )}
              </div>
              <p className=" text-center text-red-500 text-sm mt-2">
                {BtnInit}
              </p>
              <button
                className="shadow-submit py-2 rounded-xl dark:shadow-submit-dark flex w-full items-center justify-center bg-normal-blue text-base font-medium text-white duration-300 hover:bg-primary/90"
                type="submit"
              >
                ចូលប្រព័ន្ធ
              </button>
              <div className="flex justify-evenly items-center w-full my-2">
                <span className=" h-[1px] w-full max-w-[60px] bg-gray-500 sm:block" />
                <p className="text-gray-500 px-4">បង្កើតគណនី</p>
                <span className="bg-gray-500 h-[1px] w-full max-w-[60px] sm:block" />
              </div>
              <Link href={"/signup"} className="w-[55%]">
                <button className="w-full shadow-submit py-2 rounded-custom-12 dark:shadow-submit-dark flex items-center justify-center border-1 border-normal-blue bg-white text-base font-medium text-normal-blue duration-300 hover:bg-normal-blue hover:text-white">
                  ចុះឈ្មោះ
                </button>
              </Link>
            </form>
            </div>
      </div>
      <div className="w-1/2  max-md:hidden relative max-lg:hidden max[1400px]:hidden ">
      <Image src={back} alt="Picture of the author"
              fill
              className="object-cover rounded-r-3xl"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 400px, "/>
      </div>
      </div>
      
    </div>
  );
};

export default SigninPage;
