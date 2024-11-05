"use client";
import React from "react";
import { useState, useEffect } from "react";

import { useParams, useRouter } from "next/navigation";
import { SyncLoader } from "react-spinners";
import { Radio, RadioGroup } from "@nextui-org/react";
import { ThemeSwitch } from "@/components/theme-switch";
import { FaCircleChevronLeft } from "react-icons/fa6";
import RotateToLandscape from "../RotateToLandscape";

interface child {
  option: string;
  amount: number;
}
interface ans {
  option: string;
}
interface RadioOption {
  value: string;
  label: string;
}
interface Data {
  id: number;
  picquestions: {
    id: number;
    link: {
      href: string;
      label: string;
    };
    name: string;
  };
  multiplechoices: number;
  answer: {
    id: number;
    link: {
      href: string;
      label: string;
    };
    name: string;
  };
  solution: {
    // Changed from answer to solution
    id: number;
    link: {
      href: string;
      label: string;
    };
    name: string;
  };
  correctedAns: number;
  type: {
    key: string;
    name: string;
  };
  year: {
    key: string;
    name: string;
  };
  status: {
    // Added status if you plan to use it
    code: number;
    label: string;
    label_i18n: string;
  };
}

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);
  const [btn, setBtn] = useState<string>("បន្ទាប់");
  const [index, setIndex] = useState<number>(0);
  const [bg, setBg] = useState<string>("#0D4DA2");
  const [testquestion, setTestQuestion] = React.useState<Data[]>([]);
  const [correctedAnswer, setCorrectAnswer] = useState(0);
  const router = useParams();
  const routerLink = useRouter();
  const {slug} = router;
  const mathItems = testquestion.filter((item) => item.type?.name === slug).slice(0,10);
  const url = "https://techbox.developimpact.net";
  
  enum ans {ក, ខ, គ, ឃ, ង, ច, ឆ}
  var checkScore : boolean = false;
  

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
    const url =
      "https://techbox.developimpact.net/o/c/mockquestions/?pageSize=-1";

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
        if (data.items && Array.isArray(data.items)) {
          setTestQuestion(data.items); // Set testquestion with the API response
          setIsLoading(false);
        } else {
          console.log("Unexpected data format:", data);
        }
      })
      .catch((error) => {
        console.log("Error fetching records:", error);
      });
    }

  function createCard(ans: Data) {
    return (
      <RadioGroupComponent
      />
    );
  }

  function handlesubmit(): void {
    if(index == mathItems.length -1){
      setBtn("Submit")
      setBg("#ffffff")
      setIndex(index + 1);
      if(checkScore){
        setCorrectAnswer(correctedAnswer + 1)
        console.log(correctedAnswer);
      }
    }else{
      setIndex(index + 1);
      if(checkScore)setCorrectAnswer(correctedAnswer + 1)
      console.log(correctedAnswer);
    }
  }

  function handleleft() {
    if (window.confirm("Are you sure you want to leave?")) {
      routerLink.push("/");
    }
  }

  const RadioGroupComponent = () => {
    const [selectedValue, setSelectedValue] = useState<string>('');
    const a = Array.from({ length : mathItems[index].multiplechoices }, (_, index) => ({
    value: (index + 1).toString(),
    label: `${index + 1}`,
    }));

    const handleChange = (value: string) => {
      setSelectedValue(value); // Set the selected radio button value for UI updates
  
      const checkBox = parseInt(value);
      if (checkBox === testquestion[index].correctedAns) {
        checkScore = true;
        console.log(checkScore);
      } else {
        checkScore = false;
        console.log(checkScore);
      }
    };
  
  
    return (
      <RadioGroup label="" onChange={(e) => handleChange(e.target.value)}>
        <div className="flex gap-4">
          {a.map((option, i) => (
            <div key={i} className="bg-white rounded-[10px] p-4">
              <Radio value={option.value} className="dark:text-black" >
                {ans[i]}
              </Radio>
            </div>
          ))}
        </div>
      </RadioGroup>
    );
  };
  
  useEffect(() => {
    getForm();
  }, []);

  return (
    <>
   {isLoading? <SyncLoader className="mt-12" color="#0A3A7A"/> : 
     <div className="flex flex-col">
        <nav className="fixed w-full top-0 left-0 right-0 text-white bg-[#0D4DA2] p-2">
          <div className="flex justify-between">
            <div className="flex items-center justify-center gap-2">
              <img src="" alt="" />
              <h1>{slug} ប្រលងសាកល្បង</h1>
              <ThemeSwitch />
            </div>
            <div className="flex gap-4 justify-center items-center mr-4">
              <div>{index}/{mathItems.length} សំណួរ</div>
              <button onClick={handleleft}>
                <FaCircleChevronLeft className="w-6 hover:text-red-600 h-full" />
              </button>
            </div>
          </div>
        </nav>

        <div className="mt-12 bg-blue-500"> 
          <h1 className={'font-bold text-2xl text-left'}>សំណួរ</h1>
          <span className="bg-gray-500 h-[1px] w-full max-w-[500px] ml-4 mt-4 sm:block" />
          {mathItems[0]?.picquestions?.link?.href ?
          <div className="w-[100%] md:h-[50vh] flex items-center">
            <img
              alt="Tests Question"
              height={0}
              width={0}
              sizes="100vw"
              src={url+mathItems[index].picquestions.link.href}
              style={{ width: "100%", height: "100" }}
              className="w-[50%]" 
            />
          </div>: "Content not found"}
          {mathItems[0]?.answer?.link?.href ?
            <img
            alt="Tests Question"
            height={0}
            sizes="100vw"
            src={url+mathItems[index].answer.link.href}
            style={{ width: "100%", height: "100" }}
            width={0}
            />
            : ""
          }
          <h1 className="font-bold text-2xl text-left mt-2">ចម្លើយ</h1>
          <span className="bg-gray-500 h-[1px] w-full max-w-[500px] ml-4 mt-4 sm:block" />
          <div className="multiplechoice">
            {createCard(testquestion[0])}
          </div>
          <button className={`
            mt-4 w-20 p-2
            text-white bg-[${bg}] font-xl font-bold
            rounded-2xl`}
            onClick={handlesubmit}>{btn}</button>
        </div>
      <RotateToLandscape/>
    </div>
  }
    </>
  );
}
