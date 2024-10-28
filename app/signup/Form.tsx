// pages/Contact.tsx
'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Form = () => {
  //Validate
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rePassword, setRePassword] = useState<string>("");
  const [termsAccepted, setTermsAccepted] = useState<boolean>(false);

  const [fullNameError, setFullNameError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [rePasswordError, setRePasswordError] = useState<string>("");
  const [termsError, setTermsError] = useState<string>("");
  const router = useRouter();


  // Form validity state
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  const validateForm = () => {
    const isValid =
      fullName.length >= 2 &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
      password.length >= 8 &&
      password === rePassword &&
      !termsAccepted;
    
    setIsFormValid(isValid);
  };

  const handleFullNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFullName(value);
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
  //Validate

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
function postRecord(accessToken) {
  const jsonObject = {
    "email": email,
    "name": fullName,
    "password": password
  };
	const url = 'https://techbox.developimpact.net/o/c/users/';
console.log(url);

fetch(url, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
			    "Authorization": "Bearer " + accessToken
       },
        body: JSON.stringify(jsonObject)
  })
	 .then(url => url.json())
  .then(url => console.log("Record created successfully!", url))
  .catch(error => {
    alert.error("Error creating record:", url);
		});
    }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement> ,
  )=> {
    e.preventDefault();
    if (isFormValid) {
      console.log("Form submitted successfully!");
      // Proceed with form submission logic (e.g., API call)
      submitForm();
      router.push('/signin');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Full Name Input */}
      <div className="mb-8">
        <label htmlFor="name" className="mb-3 block text-sm text-dark dark:text-white">
          Full Name
        </label>
        <input
          type="text"
          name="name"
          placeholder="Enter your full name"
          className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
          value={fullName}
          onChange={handleFullNameChange}
        />
        {fullNameError && <p className="text-red-500 text-sm">{fullNameError}</p>}
      </div>

      {/* Email Input */}
      <div className="mb-8">
        <label htmlFor="email" className="mb-3 block text-sm text-dark dark:text-white">
          Email
        </label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
          value={email}
          onChange={handleEmailChange}
        />
        {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
      </div>

      {/* Password Input */}
      <div className="mb-8">
        <label htmlFor="password" className="mb-3 block text-sm text-dark dark:text-white">
          Password
        </label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
          value={password}
          onChange={handlePasswordChange}
        />
        {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}
      </div>

      {/* Re-enter Password Input */}
      <div className="mb-8">
        <label htmlFor="rePassword" className="mb-3 block text-sm text-dark dark:text-white">
          Re-enter Password
        </label>
        <input
          type="password"
          name="rePassword"
          placeholder="Re-enter your password"
          className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
          value={rePassword}
          onChange={handleRePasswordChange}
        />
        {rePasswordError && <p className="text-red-500 text-sm">{rePasswordError}</p>}
      </div>

      {/* Terms and Conditions Checkbox */}
      <div className="mb-8 flex">
        <label htmlFor="checkboxLabel" className="flex cursor-pointer select-none text-sm font-medium text-body-color">
          <div className="relative">
            <input
              type="checkbox"
              id="checkboxLabel"
              className="sr-only"
              checked={termsAccepted}
              onChange={handleCheckboxChange}
            />
            <div className={`box mr-4 mt-1 flex h-5 w-5 items-center justify-center rounded border border-body-color border-opacity-20 dark:border-white dark:border-opacity-10 ${termsAccepted ? "bg-primary" : ""}`}>
              {termsAccepted && (
                <span className="opacity-100">
                  <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                      fill="#3056D3"
                      stroke="#3056D3"
                      strokeWidth="0.4"
                    />
                  </svg>
                </span>
              )}
            </div>
          </div>
          <span>
            By creating an account, you agree to the
            <a href="#0" className="text-primary hover:underline"> Terms and Conditions </a>, and our
            <a href="#0" className="text-primary hover:underline"> Privacy Policy </a>
          </span>
        </label>
      </div>
      {termsError && <p className="text-red-500 text-sm mt-2">{termsError}</p>}

      {/* Submit Button */}
      <button type='submit' disabled={!isFormValid} className="shadow-submit dark:shadow-submit-dark flex w-full items-center justify-center rounded-sm bg-primary px-9 py-4 text-base font-medium text-white duration-300 hover:bg-primary/90">
        Sign Up
      </button>
    </form>
  );
};

export default Form;
