// pages/Contact.tsx
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


const Form = () => {
  //Validate
  const [fullName, setFullName] = useState<string>("");
  const [firstname, setFirstname] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rePassword, setRePassword] = useState<string>("");
  const [termsAccepted, setTermsAccepted] = useState<boolean>(false);

  const [fullNameError, setFullNameError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [rePasswordError, setRePasswordError] = useState<string>("");
  const [termsError, setTermsError] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [ButtonErr, setBtnErr] = useState<string>("");
  const [check,setCheck] = useState<boolean>(false);
  const router = useRouter();


  // Form validity state
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  const validateForm = () => {
    const isValid =
      lastname.length >= 2 && firstname.length >= 2 &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
      password.length >= 8 &&
      password === rePassword &&
      !termsAccepted;
    
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

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setTermsAccepted(checked);
    setTermsError(checked ? "" : "You must accept the Terms and Conditions.");
    validateForm();
  };
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  async function submitForm(){

    const clientId = 'id-ff33fd67-2662-23d2-e387-7e660796b71';
    const clientSecret = 'secret-16433662-63e6-dea2-91b5-c0be0d0db7c';
    const tokenUrl = 'https://techbox.developimpact.net/o/oauth2/token';
    const response = await fetch(tokenUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            'grant_type': 'client_credentials',
            'client_id': clientId,
            'client_secret': clientSecret
        })
		});
    if (response.ok) {
        const data = await response.json();
			  postRecord(data.access_token);
    } else {
        console.log("Error");
    }
}
function postRecord(accessToken:any) {
  const jsonObject = {
    "email": email,
    "name": lastname + " " + firstname,
    "password": password
  };
	const url = 'https://techbox.developimpact.net/o/c/users/';

fetch(url, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
			    "Authorization": "Bearer " + accessToken
       },
        body: JSON.stringify(jsonObject)
  })
	//  .then(url => url.json())
  .then(url => {
    // console.log("Record created successfully!", url)
    setCheck(false);
    router.push('/signin')
  })
  .catch(error => {
    console.log("Error creating record:", url);
		});
    }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement> ,
  )=> {
    e.preventDefault();
    if (isFormValid) {
      setError(true)
      submitForm();
      setCheck(true);
      // setTimeout(() => {
      //   setCheck(false);
      //   router.push('/signin');
      // },2000)
    }else{
      setBtnErr("Please fill in all required fields*");  
    }
  };

  return (
    <section className="bg-[#EBF1FA] flex justify-center items-center w-screen h-screen">
      {check? <Loading/> : ""} 
        <div className=" container rounded-2xl md:grid-cols-2 grid-cols-1 md:p-0 grid bg-white md:w-[60%] w-[90%]">
          <div className="left flex flex-col justify-center items-center gap-3 p-4 md:p-12">
            <form onSubmit={handleSubmit} >
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
                  <div>
                    <input
                      type="checkbox"
                      id="checkboxLael"
                      className="bg-white w-5 h-full"
                      checked={termsAccepted}
                      onChange={handleCheckboxChange}
                    />
                  </div>
                  <div>
                    ក្នុងការបង្កើតគណនីអ្នកបានយល់ព្រមពី
                    <a className="text-primary hover:underline"> លក្ខខណ្ឌ </a>, ជាមួយនឹង
                    <a className="text-primary hover:underline"> ឯកជនភាព។ </a>
                  </div>
              </div>
              {termsError && <p className="text-red-500 text-sm mt-2">{termsError}</p>}

              {/* Submit Button */}
              <p className="text-red-500 text-sm mt-2">{ButtonErr}</p>
              <button type='submit' id='signup'
                      className="shadow-submit py-2 rounded-2xl dark:shadow-submit-dark flex w-full items-center justify-center bg-blue-800 text-base font-medium text-white duration-300 hover:bg-primary/90">
                ចុះឈ្មោះ
              </button>
            </fieldset>
          </form>
            <div className="flex justify-center items-center w-full">
              <span className=" h-[1px] w-full max-w-[60px] bg-gray-500 sm:block" />
              <p className="text-gray-500 px-4">មានគណនីរួចហើយ?</p>
              <span className="bg-gray-500 h-[1px] w-full max-w-[60px] sm:block" />
            </div>
            <Link href={'/signin'} className="w-[55%]">
              <button className="w-full shadow-submit py-2 rounded-2xl dark:shadow-submit-dark flex items-center justify-center border-1 border-blue-600 bg-white text-base font-medium text-blue-600 duration-300 hover:bg-blue-900">
                 ចូលប្រព័ន្ធ
                </button>
            </Link>
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
  );
};

export default Form;
