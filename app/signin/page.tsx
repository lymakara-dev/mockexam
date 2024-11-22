"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import Image from "next/image";
import { Input } from "@nextui-org/input";
import Link from "next/link";
import back from "../../public/Auth/back.jpeg";
import GIC from "../../public/Auth/ITCLogo.png";
import { EnvelopeIcon, LockClosedIcon, } from "@heroicons/react/24/solid";
import { SessionProvider, signIn } from "next-auth/react";

const icons = {
  mail: EnvelopeIcon,
  lock: LockClosedIcon,

};

type IconType = keyof typeof icons;

const IconComponent: React.FC<{ icon: IconType }> = ({ icon }) => {
  const Icon = icons[icon];
  return <Icon className="h-6 w-6 text-common-gray" />;
};
import { fetchUser } from "../api/signin/fetchUsers";
import ReCAPTCHA from "react-google-recaptcha";
import Loading from "../signup/Loading";

interface Data {
  email: string;
  password: string;
}
let users: Data[] = [];
const SigninPage = () => {
  const [response, setResponse] = useState(false);
  const [check, setCheck] = useState(false);
  const [captcha, setCaptcha] = useState<string | null>("Auto Fill in Captcha");
  const router = useRouter();

  useEffect(() => {
    const getData = async () => {
      try {
        const records = await fetchUser();
        users = records;
        setResponse(true);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();
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
    console.log(captcha);

    if (!emailError) {
      setBtnInit("សូមបញ្ចូលគណនី");
    } else if (!passwordError) {
      setBtnInit("Password must be at least 8 characters");
    } else if (captcha == null) {
      setBtnInit("Captcha is required");
    } else {
      const user = users.find(
        (u) => u.email === email && u.password === password
      );
      if (user) {
        setCheck(true);
        setTimeout(() => {
          setCheck(false);
          Cookies.set("authenticated", email, { expires: 1 });
          router.push("/");
        }, 1300);
      } else {
        setBtnInit("ព័ត៌មានគណនីមិនត្រឹមត្រូវ");
      }
    }
  };

  return (
      <div className=" flex items-center justify-center h-screen w-full bg-[#EBF1FA]">
        {check? <Loading/> : ""}
        <div className="bg-white w-[50vw] h-[60vh] flex rounded-3xl max-md:w-[80vw] max-md:h-[50vh] max-lg:h-[60vh] max-lg:w-[40vw] ">
          <div className="flex flex-col w-1/2 max-md:w-full max-lg:w-[50vw] items-center justify-center    ">
            <Image src={GIC} alt="GICLogo" width={250} height={250} className="mb-4" />
            <div className="flex flex-col w-[80%]">
              <form onSubmit={handlelogin}>
                <div className={'mb-2'}>
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
                    <p className="text-red-500 text-sm">{emailError}</p>
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
                <p className="text-center text-red-500 text-sm mt-2">
                  {BtnInit}
                </p>

                {/* <ReCAPTCHA className="w-full mb-4 " sitekey="6Ld4AHkqAAAAAHRWk0IBg6lJZwtB-S127yYkWHMa" onChange={setCaptcha} /> */}
                <button className="shadow-submit w-full py-2 rounded-xl bg-normal-blue text-white" type="submit">
                  ចូលប្រព័ន្ធ
                </button>
                {/* <div className="flex justify-evenly items-center w-full my-2">
                  <span className="h-[1px] w-full max-w-[60px] bg-gray-500 sm:block" />
                  <p className="text-gray-500 px-4">ចូលប្រព័ន្ធជាមួយ Google </p>
                  <span className="bg-gray-500 h-[1px] w-full max-w-[60px] sm:block" />
                </div> */}

                {/* //Sign in with google */}
                {/* <button onClick={() => {
                  const a = signIn('google')
                  console.log(a);

                }}
                  className="border-stroke rounded-xl dark:text-body-color-dark dark:shadow-two mb-6 flex w-full items-center justify-center border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 hover:border-primary hover:bg-normal-blue/3 hover:text-primary dark:border-transparent dark:bg-[#2C303B] dark:hover:border-primary dark:hover:bg-primary/5 dark:hover:text-primary dark:hover:shadow-none">
                  <span className="mr-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_95:967)">
                        <path
                          d="M20.0001 10.2216C20.0122 9.53416 19.9397 8.84776 19.7844 8.17725H10.2042V11.8883H15.8277C15.7211 12.539 15.4814 13.1618 15.1229 13.7194C14.7644 14.2769 14.2946 14.7577 13.7416 15.1327L13.722 15.257L16.7512 17.5567L16.961 17.5772C18.8883 15.8328 19.9997 13.266 19.9997 10.2216"
                          fill="#4285F4"
                        />
                        <path
                          d="M10.2042 20.0001C12.9592 20.0001 15.2721 19.1111 16.9616 17.5778L13.7416 15.1332C12.88 15.7223 11.7235 16.1334 10.2042 16.1334C8.91385 16.126 7.65863 15.7206 6.61663 14.9747C5.57464 14.2287 4.79879 13.1802 4.39915 11.9778L4.27957 11.9878L1.12973 14.3766L1.08856 14.4888C1.93689 16.1457 3.23879 17.5387 4.84869 18.512C6.45859 19.4852 8.31301 20.0005 10.2046 20.0001"
                          fill="#34A853"
                        />
                        <path
                          d="M4.39911 11.9777C4.17592 11.3411 4.06075 10.673 4.05819 9.99996C4.0623 9.32799 4.17322 8.66075 4.38696 8.02225L4.38127 7.88968L1.19282 5.4624L1.08852 5.51101C0.372885 6.90343 0.00012207 8.4408 0.00012207 9.99987C0.00012207 11.5589 0.372885 13.0963 1.08852 14.4887L4.39911 11.9777Z"
                          fill="#FBBC05"
                        />
                        <path
                          d="M10.2042 3.86663C11.6663 3.84438 13.0804 4.37803 14.1498 5.35558L17.0296 2.59996C15.1826 0.901848 12.7366 -0.0298855 10.2042 -3.6784e-05C8.3126 -0.000477834 6.45819 0.514732 4.8483 1.48798C3.2384 2.46124 1.93649 3.85416 1.08813 5.51101L4.38775 8.02225C4.79132 6.82005 5.56974 5.77231 6.61327 5.02675C7.6568 4.28118 8.91279 3.87541 10.2042 3.86663Z"
                          fill="#EB4335"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_95:967">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  Sign in with Google
                </button> */}
                <div className="flex justify-evenly items-center w-full my-2">
                  <span className="h-[1px] w-full max-w-[60px] bg-gray-500 sm:block" />
                  <p className="text-gray-500 px-4">បង្កើតគណនី</p>
                  <span className="bg-gray-500 h-[1px] w-full max-w-[60px] sm:block" />
                </div>
                <Link href="/signup" className="flex justify-center">
                  <button className="w-[50%] shadow-submit py-2 rounded-custom-12 border-1 border-normal-blue bg-white text-normal-blue hover:bg-normal-blue hover:text-white">
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
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 400px, " />
          </div>
        </div>
      </div>
  );
};

export default page