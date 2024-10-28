"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import Image from "next/image";
import { Input } from "@nextui-org/input";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

interface Quiz2 {
  email: string;
  password: string;
}
let users: Quiz2[] = [];
const SigninPage = () => {
  const [response, setResponse] = useState(false);
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
    const url = "https://techbox.developimpact.net/o/c/users/";

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
            console.log("Unexpected data format:", data);
          }
        }
      })
      .catch((error) => {
        console.log("Error fetching records:", error);
      });
  }
  useEffect(() => {
    getForm();
    console.log(users);
  }, []);
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");

  //Validate
  const validateForm = () => {
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    setIsFormValid(isValid);
  };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setEmail(value);
    setEmailError(
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "" : "Invalid email address.",
    );
    validateForm();
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setPassword(value);
    setPasswordError(
      value.length >= 8 ? "" : "Password must be at least 8 characters long.",
    );
    validateForm();
  };

  //Check
  const handlelogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isFormValid) {
      console.log("Form submitted successfully!");
      const user = users.find(
        (u) => u.email === email && u.password === password,
      );

      console.log(users);
      if (user) {
        // Redirect to a protected page on successful login
        Cookies.set("authenticated", "true", { expires: 1 / ((24 * 60) / 2) });
        router.push("/");
      } else {
        // Show an error message on invalid login
        console.log("Invalid username or password");
      }
    }
  };

  //Compare
  return (
    <>
      <section className="bg-[#EBF1FA] flex justify-center items-center w-screen h-screen">
        <div className=" container rounded-2xl md:grid-cols-2 grid-cols-1 md:p-0 p-6 grid bg-white md:w-[60%] w-[80%]">
          <div className="left flex flex-col justify-center items-center gap-3 ">
            <Image
              alt="ITC logo"
              className=""
              height={200}
              src={"/Auth/ITCLogo.png"}
              width={200}
            />
            <form onSubmit={handlelogin}>
              <div className="my-3">
                <Input
                  className="border-1 border-gray-500 rounded-xl"
                  name="email"
                  placeholder="អុីម៉ែល"
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  endContent={<MdOutlineEmail />}
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
                {/* {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>} */}
              </div>

              <button
                className="shadow-submit py-2 rounded-2xl dark:shadow-submit-dark flex w-full items-center justify-center bg-blue-800 text-base font-medium text-white duration-300 hover:bg-primary/90"
                disabled={!isFormValid}
                type="submit"
                onClick={() => {
                  console.log("click");
                }}
              >
               ចូល
              </button>
            </form>
            <div className="flex justify-center items-center w-full">
              <span className=" h-[1px] w-full max-w-[60px] bg-gray-500 sm:block" />
              <p className="text-gray-500 px-4">បង្កើតគណនី</p>
              <span className="bg-gray-500 h-[1px] w-full max-w-[60px] sm:block" />
            </div>
            <button className="w-[55%] shadow-submit py-2 rounded-2xl dark:shadow-submit-dark flex items-center justify-center border-1 border-blue-600 bg-white text-base font-medium text-blue-600 duration-300 hover:bg-primary/90">
               ចុះឈ្មោះ
              </button>
          </div>
          <div className="md:flex hidden right justify-end aspect-square w-full">
            <Image
              alt="ITC campus"
              height={0}
              sizes="100vw"
              src={"/Auth/back.jpeg"}
              style={{ width: "100%", height: "100%" }}
              width={0}
              className="aspect-square rounded-br-2xl rounded-tr-2xl"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default SigninPage;

// <div className="container">
//   <div className="-mx-4 flex flex-wrap">
//     <div className="w-full px-4">
//       <div className="shadow-three mx-auto max-w-[500px] rounded bg-white px-6 py-10 dark:bg-dark sm:p-[60px]">
//         <h3 className="mb-3 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">
//           Sign in to your account
//         </h3>
//         <p className="mb-11 text-center text-base font-medium text-body-color">
//           Login to your account for a faster checkout.
//         </p>
//         <button className="border-stroke dark:text-body-color-dark dark:shadow-two mb-6 flex w-full items-center justify-center rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 hover:border-primary hover:bg-primary/5 hover:text-primary dark:border-transparent dark:bg-[#2C303B] dark:hover:border-primary dark:hover:bg-primary/5 dark:hover:text-primary dark:hover:shadow-none">
//           <span className="mr-3">
//             <svg
//               width="20"
//               height="20"
//               viewBox="0 0 20 20"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <g clipPath="url(#clip0_95:967)">
//                 <path
//                   d="M20.0001 10.2216C20.0122 9.53416 19.9397 8.84776 19.7844 8.17725H10.2042V11.8883H15.8277C15.7211 12.539 15.4814 13.1618 15.1229 13.7194C14.7644 14.2769 14.2946 14.7577 13.7416 15.1327L13.722 15.257L16.7512 17.5567L16.961 17.5772C18.8883 15.8328 19.9997 13.266 19.9997 10.2216"
//                   fill="#4285F4"
//                 />
//                 <path
//                   d="M10.2042 20.0001C12.9592 20.0001 15.2721 19.1111 16.9616 17.5778L13.7416 15.1332C12.88 15.7223 11.7235 16.1334 10.2042 16.1334C8.91385 16.126 7.65863 15.7206 6.61663 14.9747C5.57464 14.2287 4.79879 13.1802 4.39915 11.9778L4.27957 11.9878L1.12973 14.3766L1.08856 14.4888C1.93689 16.1457 3.23879 17.5387 4.84869 18.512C6.45859 19.4852 8.31301 20.0005 10.2046 20.0001"
//                   fill="#34A853"
//                 />
//                 <path
//                   d="M4.39911 11.9777C4.17592 11.3411 4.06075 10.673 4.05819 9.99996C4.0623 9.32799 4.17322 8.66075 4.38696 8.02225L4.38127 7.88968L1.19282 5.4624L1.08852 5.51101C0.372885 6.90343 0.00012207 8.4408 0.00012207 9.99987C0.00012207 11.5589 0.372885 13.0963 1.08852 14.4887L4.39911 11.9777Z"
//                   fill="#FBBC05"
//                 />
//                 <path
//                   d="M10.2042 3.86663C11.6663 3.84438 13.0804 4.37803 14.1498 5.35558L17.0296 2.59996C15.1826 0.901848 12.7366 -0.0298855 10.2042 -3.6784e-05C8.3126 -0.000477834 6.45819 0.514732 4.8483 1.48798C3.2384 2.46124 1.93649 3.85416 1.08813 5.51101L4.38775 8.02225C4.79132 6.82005 5.56974 5.77231 6.61327 5.02675C7.6568 4.28118 8.91279 3.87541 10.2042 3.86663Z"
//                   fill="#EB4335"
//                 />
//               </g>
//               <defs>
//                 <clipPath id="clip0_95:967">
//                   <rect width="20" height="20" fill="white" />
//                 </clipPath>
//               </defs>
//             </svg>
//           </span>
//           Sign in with Google
//         </button>
//         <div className="mb-8 flex items-center justify-center">
//           <span className="hidden h-[1px] w-full max-w-[70px] bg-body-color/50 sm:block"></span>
//           <p className="w-full px-5 text-center text-base font-medium text-body-color">
//             Or, sign in with your account
//           </p>
//           <span className="hidden h-[1px] w-full max-w-[70px] bg-body-color/50 sm:block"></span>
//         </div>

//         <p className="text-center text-base font-medium text-body-color">
//           Don’t you have an account?{" "}
//           <Link href="/signup" className="text-primary hover:underline">
//             Sign up
//           </Link>
//         </p>
//       </div>
//     </div>
//   </div>
// </div>
// <div className="absolute left-0 top-0 z-[-1]">
//   <svg
//     width="1440"
//     height="969"
//     viewBox="0 0 1440 969"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <mask
//       id="mask0_95:1005"
//       style={{ maskType: "alpha" }}
//       maskUnits="userSpaceOnUse"
//       x="0"
//       y="0"
//       width="1440"
//       height="969"
//     >
//       <rect width="1440" height="969" fill="#090E34" />
//     </mask>
//     <g mask="url(#mask0_95:1005)">
//       <path
//         opacity="0.1"
//         d="M1086.96 297.978L632.959 554.978L935.625 535.926L1086.96 297.978Z"
//         fill="url(#paint0_linear_95:1005)"
//       />
//       <path
//         opacity="0.1"
//         d="M1324.5 755.5L1450 687V886.5L1324.5 967.5L-10 288L1324.5 755.5Z"
//         fill="url(#paint1_linear_95:1005)"
//       />
//     </g>
//     <defs>
//       <linearGradient
//         id="paint0_linear_95:1005"
//         x1="1178.4"
//         y1="151.853"
//         x2="780.959"
//         y2="453.581"
//         gradientUnits="userSpaceOnUse"
//       >
//         <stop stopColor="#4A6CF7" />
//         <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
//       </linearGradient>
//       <linearGradient
//         id="paint1_linear_95:1005"
//         x1="160.5"
//         y1="220"
//         x2="1099.45"
//         y2="1192.04"
//         gradientUnits="userSpaceOnUse"
//       >
//         <stop stopColor="#4A6CF7" />
//         <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
//       </linearGradient>
//     </defs>
//   </svg>
// </div>
