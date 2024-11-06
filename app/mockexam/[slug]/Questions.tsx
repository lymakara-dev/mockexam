"use client";
import React from "react";
import { useState, useEffect } from "react";

import { useParams, useRouter } from "next/navigation";
import { SyncLoader } from "react-spinners";
import { Radio, RadioGroup } from "@nextui-org/react";
import { ThemeSwitch } from "@/components/theme-switch";
import { FaCircleChevronLeft } from "react-icons/fa6";
import RotateToLandscape from "../RotateToLandscape";
import Result from "./Result";
import Cookies from "js-cookie";
import CountdownTimer from "../counter";
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
  const [isSubmitted, setIsSubmitted] = useState(true);
  const [warning, setWarning] = useState(false);
  // const [currentTime , setCurrentTime] = useState<number>()
  let currentTime = 0;
  const router = useParams();
  const routerLink = useRouter();
  const {slug} = router;
  const mathItems = testquestion.filter((item) => item.type?.name === slug).slice(0,2);

  const url = "https://techbox.developimpact.net";
  
  enum ans {ក, ខ, គ, ឃ, ង, ច, ឆ}
  var checkScore : boolean | null = false;
  
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
    "email": Cookies.get('authenticated'),
    "score": correctedAnswer,
    "type": slug,
    "timeRemain": currentTime,
  };
	const url = 'https://techbox.developimpact.net/o/c/mockresults/';

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
    console.log("Record created successfully!", url)
    // setCheck(false);
    // router.push('/signin')
  })
  .catch(error => {
    console.log("Error creating record:", url);
		});
    }

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

  const RadioGroupComponent = () => {
    const [selectedValue, setSelectedValue] = useState<string | null>(null);
    const a = Array.from({ length : mathItems[index].multiplechoices }, (_, index) => ({
    value: (index + 1).toString(),
    label: `${index + 1}`,
    }));

    useEffect(() => {
      if (selectedValue === null) {
        checkScore = null
      }
    }, [selectedValue]);
    
    const handleChange = (value: string) => {
      setSelectedValue(value);
      const checkBox = parseInt(value);      
      if (checkBox === testquestion[index].correctedAns) {
        checkScore = true;        
      }else{
        checkScore = false;
      }
    };
  
    return (
      <RadioGroup label="" onChange={(e) => handleChange(e.target.value)}>
        <div className="flex gap-4">
          {a.map((option, i) => (
            <div key={i} className="bg-white rounded-[10px] p-4">
              <Radio value={option.value} >
                {ans[i]}
              </Radio>
            </div>
          ))}
        </div>
      </RadioGroup>
    );
  };

  function handlesubmit(): void {
      if(index + 1 == mathItems.length - 1){
        setBtn("បញ្ជូន")
      }
      if(index == mathItems.length -1){
        if(checkScore){
            setCorrectAnswer(correctedAnswer + 1)
            submitForm()
            setIsSubmitted(false)
          }else{
            submitForm()
            setIsSubmitted(false)
        }
      }else if (checkScore == null){
        alert("សូមជ្រើសរើសចម្លើយ")
      }
      else{
        setIndex(index + 1);
        if(checkScore)setCorrectAnswer(correctedAnswer + 1)
      }    
  }

  function handleleft() {
    if (window.confirm("Are you sure you want to leave?")) {
      routerLink.push("/");
    }
  }

  function handleAutoSubmit(){
    setIsSubmitted(false);
  }

  const handleTimeUpdate = (timeLeft: number) => {
    currentTime = timeLeft
  };

  useEffect(() => {
    getForm();
  }, []);

  return (
    <>
   {isLoading? <SyncLoader className="text-center mt-[50vh]" color="#0A3A7A"/> : isSubmitted? (
     <div className="flex flex-col">
        <nav className="fixed w-[100%] top-0 left-0 right-0 text-white bg-[#0D4DA2] p-2">
          <div className="flex justify-between">
            <div className="flex items-center justify-center gap-2">
              <img src="" alt="" />
              <h1>{slug} ប្រលងសាកល្បង</h1>
              {/* <ThemeSwitch /> */}
            </div>
            <CountdownTimer onTimeUpdate={handleTimeUpdate} initialTime={1*60*60} onSubmit={handleAutoSubmit}/>
            <div className="flex gap-4 justify-center items-center mr-4">
              <div>{index+1}/{mathItems.length} សំណួរ</div>
              <button onClick={handleleft}>
                <FaCircleChevronLeft className="w-6 hover:text-red-600 h-full" />
              </button>
            </div>
          </div>
        </nav>
        <div className="mt-10 p-8"> 
          <h1 className={'font-bold text-2xl text-left'}>សំណួរ</h1>
          <span className="bg-gray-500 h-[1px] w-full max-w-[500px] ml-4 mt-4 sm:block" />
          {mathItems[0]?.picquestions?.link?.href ?
          <div className="w-[100%] md:h-[100%] flex items-center">
            <img
              alt="Tests Question"
              height={0}
              width={0}
              sizes="100vw"
              src={url+mathItems[index].picquestions.link.href}
              style={{ width: "100%", height: "100" }}
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
    </div>) : <Result score={correctedAnswer} />
  }
    </>
  );
}
