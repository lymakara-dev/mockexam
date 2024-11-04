"use client";
import React from "react";
import { useState, useEffect } from "react";

import Cookies from "js-cookie";
import { useParams } from "next/navigation";
import { SyncLoader } from "react-spinners";
import { Radio, RadioGroup } from "@nextui-org/react";
import { ThemeSwitch } from "@/components/theme-switch";

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
  const [corIndex, setcorIndex] = React.useState(5);
  const [selectedValue, setSelectedValue] = useState<string>('');

  enum ans {ក, ខ, គ, ឃ, ង, ច, ឆ}
  
  const RadioGroupComponent = ({
    multiplechoice,
  }: {
    testquestion: number;
    multiplechoice: number;
  }) => {
    const [selectedValue, setSelectedValue] = useState<string>("");

    const a = Array.from({ length: multiplechoice }, (_, index) => ({
      value: (index + 1).toString(),
      label: `${index + 1}`,
    }));

    const handleChange = (value: string) => {
      setSelectedValue(value);

      const checkBox = parseInt(value);
      if (checkBox === testquestion[index].correctedAns) {
        setCorrectAnswer(correctedAnswer + 1);
        console.log("Correct answer");
      } else {
        console.log("Not correct");
      }
    };

    return (
      <RadioGroup label="" onChange={(e) => handleChange(e.target.value)}>
        <div className="flex flex-col gap-2">
          {a.map((option, i) => (
            <div key={i} className="rounded-[10px] p-4">
              <Radio
                value={option.value}
                className="font-semibold dark:text-black"
              >
                {ans[i]}
              </Radio>
            </div>
          ))}
        </div>
      </RadioGroup>
    );
  };

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
      // eslint-disable-next-line no-console
      console.log("Error obtaining token");
    }
  };

  function fetchRecord(accessToken: string) {
    const url =
      "https://techbox.developimpact.net/o/c/mockquestions/?pageSize=-1";

    // Clear the users array to avoid duplication
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
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      getForm();
    }, []);

    // useEffect(()=>{
    //   console.log(correctedAnswer);
    // }, [correctedAnswer]);


  const router = useParams();
  const {slug} = router;

  const mathItems = testquestion.filter((item) => item.type?.name === slug);

  const url = "https://techbox.developimpact.net";

  const a = Array.from({ length : corIndex}, (_, index) => ({
    value: (index + 1).toString(),
    label: `${index + 1}`,
  }));

  function createCard(ans: Data) {
    return (
      <RadioGroupComponent
        testquestion={ans.correctedAns}
        multiplechoice={ans.multiplechoices}
      />
    );
  }

  const userIdFromCookie = Cookies.get('authenticated');

  function handlesubmit(): void {
    if(index == mathItems.length -1){
      setBtn("Submit")
      setBg("#ffffff")
            
    }else{
      setIndex(index + 1);
    }
  }


  return (
    <>
   {isLoading? <SyncLoader className="mt-12" color="#0A3A7A"/> : 
     <div className="flex flex-col mt-4">
      <nav className="flex w-[1200px] text-white justify-between bg-[#0D4DA2] p-2 rounded-[10px]">
        <div className="">
          <div className="flex items-center justify-center gap-2">
            <img src="" alt="" />
            <h1>{slug} Exam</h1>
            <ThemeSwitch />
          </div>
        </div>
        <div>{index}/{mathItems.length} Questions</div>
      </nav>
       <h1 className={'font-bold text-2xl text-left'}>សំណួរ</h1>
       {mathItems[0]?.picquestions?.link?.href ?
       <img
         alt="Tests Question"
         height={0}
         sizes="100vw"
         src={url+mathItems[index].picquestions.link.href}
        style={{ width: "100%", height: "100" }}
        width={0}
      /> : "Content not found"}
      {mathItems[0]?.answer?.link?.href ?
        <img
        alt="Tests Question"
        height={0}
        sizes="100vw"
        src={url+mathItems[index].answer.link.href}
        style={{ width: "100%", height: "100" }}
        width={0}
        />
        :
        ""
      }
      <h1 className="font-bold text-2xl text-left mt-2">ចម្លើយ</h1>
      <div className="multiplechoice">
      {createCard(testquestion[0])}
      </div>
      <button className={`mt-4 font-xl font-bold p-2 bg-[${bg}]`}onClick={handlesubmit}>{btn}</button>
    </div>
  }
    </>
  );
}
