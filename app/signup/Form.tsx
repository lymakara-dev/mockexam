'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Input } from '@nextui-org/input';
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { GridLoader } from 'react-spinners';
import Loading from './Loading';
import ReCAPTCHA from 'react-google-recaptcha';
import { submitForm } from '../api/signup/postUser';

const Form = () => {
  //Validate
  const [fullName, setFullName] = useState<string>("");
  const [firstname, setFirstname] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rePassword, setRePassword] = useState<string>("");
  const [termsAccepted, setTermsAccepted] = useState<boolean>(true);

  const [fullNameError, setFullNameError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [rePasswordError, setRePasswordError] = useState<string>("");
  const [termsError, setTermsError] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [ButtonErr, setBtnErr] = useState<string>("");
  const [check, setCheck] = useState<boolean>(false);
  const [captcha, setCaptcha] = useState<string | null>();
  const router = useRouter();


  // Form validity state
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  const validateForm = () => {
    const isValid =
      lastname.length >= 2 && firstname.length >= 2 &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
      password.length >= 8 &&
      password === rePassword 
    setIsFormValid(isValid);
  };

  const handleLast = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLastname(value);
    setFullNameError(value.length >= 2 ? "" : "Full Name must be at least 2 characters long.");
    validateForm();
  };

  const handleFirst = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFirstname(value);
    setFullNameError(value.length >= 2 ? "" : "Full Name must be at least 2 characters long.");
    validateForm();
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setEmailError(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "" : "Invalid email address.");
    validateForm();
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordError(value.length >= 8 ? "" : "Password must be at least 8 characters long.");
    validateForm();
  };

  const handleRePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setRePassword(value);
    setRePasswordError(value === password ? "" : "Passwords must match.");
    validateForm();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();
    if (isFormValid && captcha != null) {
      setError(true)
      submitForm(email, password, lastname, firstname);
      setCheck(true);
    } else {
      setBtnErr("Please fill in all required fields*");
    }
  };

  return (
    <section className="bg-[#EBF1FA] flex justify-center items-center w-screen h-screen">
      {check ? <Loading /> : ""}
      <div className="rounded-2xl md:grid-cols-2 grid-cols-1 md:p-0 grid bg-white md:w-[60%] w-[90%]">
        <div className="left flex flex-col justify-center items-center gap-3 p-4 md:p-12 w-full">
          {/* //Sign in with google */}
          <div className='flex justify-center flex-col items-center w-full'>
            <form onSubmit={handleSubmit} >
              <button className="border-stroke rounded-xl w-full dark:text-body-color-dark dark:shadow-two mb-6 flex items-center justify-center border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 hover:border-primary hover:bg-normal-blue/3 hover:text-primary dark:border-transparent dark:bg-[#2C303B] dark:hover:border-primary dark:hover:bg-primary/5 dark:hover:text-primary dark:hover:shadow-none">
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
              </button>
              <fieldset className='border-2 p-5 rounded-xl'>
                <legend className='ml-7 text-xl'>​បង្កើតគណនី</legend>
                {/* Full Name Input */}
                <div className="mb-3 flex gap-4">
                  <Input
                    type="text"
                    name="name"
                    placeholder="នាមឈ្មោះ"
                    className="border-1 border-gray-500 rounded-xl"
                    value={firstname}
                    onChange={handleFirst}
                  />
                  <Input
                    type="text"
                    name="name"
                    placeholder="នាមត្រកូល"
                    className="border-1 border-gray-500 rounded-xl"
                    value={lastname}
                    onChange={handleLast}
                  />
                </div>
                {fullNameError && <p className="text-red-500 text-sm">{fullNameError}</p>}
                {/* Email Input */}
                <div className="mb-3">
                  <Input
                    type="email"
                    name="email"
                    placeholder="អុីម៉ែល"
                    className="border-1 border-gray-500 rounded-xl"
                    value={email}
                    onChange={handleEmailChange}
                    endContent={<MdOutlineEmail />}
                  />
                  {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
                </div>
                {/* Password Input */}
                <div className="mb-3">
                  <Input
                    type="password"
                    name="password"
                    placeholder="លេខសម្ងាត់"
                    className="border-1 border-gray-500 rounded-xl"
                    value={password}
                    onChange={handlePasswordChange}
                    endContent={<RiLockPasswordFill />}
                  />
                  {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}
                </div>
                {/* Re-enter Password Input */}
                <div className="mb-3">
                  <Input
                    type="password"
                    name="rePassword"
                    placeholder="លេខសម្ងាត់"
                    className="border-1 border-gray-500 rounded-xl"
                    value={rePassword}
                    onChange={handleRePasswordChange}
                    endContent={<RiLockPasswordFill />}
                  />
                  {rePasswordError && <p className="text-red-500 text-sm">{rePasswordError}</p>}
                </div>
                {/* Terms and Conditions Checkbox */}
                <div className="mb-3 flex gap-4 ">
                  {/* <div>
                      <input
                        type="checkbox"
                        id="checkboxLael"
                        className="bg-white w-5 h-full"
                        checked={termsAccepted}
                        onChange={handleCheckboxChange}
                      />
                    </div> */}
                  <div>
                    <span className='text-red-500'>*</span>រាល់ការបង្កើតគណនីអ្នកបានយល់ព្រមពី
                    <a className="text-primary hover:underline"> លក្ខខណ្ឌ </a>, ជាមួយនឹង
                    <a className="text-primary hover:underline"> ឯកជនភាព។ </a>
                  </div>
                </div>
                {termsError && <p className="text-red-500 text-sm mt-2">{termsError}</p>}
                <div className='w-full flex'>
                  <ReCAPTCHA className="mb-2 text-center" sitekey="6Ld4AHkqAAAAAHRWk0IBg6lJZwtB-S127yYkWHMa" onChange={setCaptcha} />
                </div>
                {/* Submit Button */}
                <p className="text-red-500 text-sm mt-2">{ButtonErr}</p>
                <button type='submit' id='signup'
                  className="shadow-submit py-2 rounded-2xl dark:shadow-submit-dark flex w-full items-center justify-center bg-blue-800 text-base font-medium text-white duration-300 hover:bg-primary/90">
                  ចុះឈ្មោះ
                </button>
              </fieldset>
              <div className="flex justify-center items-center w-full m-2">
                <span className=" h-[1px] w-full max-w-[60px] bg-gray-500 sm:block" />
                <p className="text-gray-500 px-4">មានគណនីរួចហើយ?</p>
                <span className="bg-gray-500 h-[1px] w-full max-w-[60px] sm:block" />
              </div>
              <Link href={'/signin'} className="w-full flex justify-center">
                <button className="w-[50%] shadow-submit py-2 rounded-2xl dark:shadow-submit-dark flex items-center justify-center border-1 border-blue-600 bg-white text-base font-medium text-blue-600 duration-300 hover:bg-blue-900">
                  ចូលប្រព័ន្ធ
                </button>
              </Link>
            </form>
          </div>
        </div>
        <div className="md:flex hidden right justify-end aspect-square h-full w-full">
          <Image
            alt="ITC campus"
            height={0}
            sizes="100vw"
            src={"/Auth/back.jpeg"}
            style={{ width: "100%", height: "100%" }}
            width={0}
            className="rounded-br-2xl rounded-tr-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Form;
