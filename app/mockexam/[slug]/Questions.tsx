'use client'
import { Checkbox } from "@nextui-org/checkbox";
import React from "react";
import { useState,useEffect } from "react";

import CheckboxGroup from "../Checkbox";

import { HeartFilledIcon } from "@/components/icons";
import Cookies from "js-cookie";
import { useParams } from "next/navigation";
import { button } from "@nextui-org/theme";


interface child  {
  option : string;
  amount : number;
  // selected : number;
  // setSelect : (numbers : number) => void;
}
interface ans{
  option:string
}
interface data {
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
  correctedAns: number;
  type: {
    key: string;
    name: string;
  };
}

const ChildComponent: React.FC<child> = ({ option, amount}) => {
  const [selected, setSelected] = useState<string | null>(null);
  const checkboxes = Array.from({ length: amount }, (_, index) => `Option ${index + 1}`);
  
  const handleCheckboxChange = (value: string) => {
    setSelected(selected === value ? null : value);
  };

  enum ans {ក, ខ, គ, ឃ, ង, ច, ឆ}

  return (
    <>
      {checkboxes.map((opt, index) => (
        <Checkbox
          key={index}
          checked={selected === opt}
          className="mr-4 font-bold" 
          icon={<HeartFilledIcon />} 
          onChange={() => handleCheckboxChange(opt)}
          >
            
          {ans[index]}
        </Checkbox>
      ))}
    </>
  );
};

export default function Page() {
  const [apiResponseData, setApiResponseData] = useState<data[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [btn, setBtn] = useState<string>("បន្ទាប់");
  const [index, setIndex] = useState<number>(0);
  const [bg,setBg] = useState<string>("#0A3A7A")
  // Initialize an array to store questions

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

  function fetchRecord (accessToken: string) {
    const url = "https://techbox.developimpact.net/o/c/mockquestions/";

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
        setApiResponseData(data.items)
        setIsLoading(false);
        
      })
      .catch((error) => {
        console.log("Error fetching records:", error);
      });
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      getForm();
    }, []);


  const router = useParams();
  const {slug} = router;

  const mathItems = apiResponseData.filter(item => item.type?.name === slug);
  
  const url = "https://techbox.developimpact.net";

  function createCard (ans: data){
    return <ChildComponent amount={ans.multiplechoices} option={""} />
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
   {isLoading? "Loading" : 
     <div className="flex flex-col mt-4">
       <h1 className={'font-bold text-2xl text-left'}>សំណួរ</h1>
       <img
         alt="Tests Question"
         height={0}
         sizes="100vw"
         src={url+mathItems[index].picquestions.link.href}
        style={{ width: "100%", height: "100" }}
        width={0}
      />
      {apiResponseData[0]?.answer?.link?.href ?
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
      {createCard(apiResponseData[0])}
      </div>
      <button className={`mt-4 font-xl font-bold p-2 bg-[${bg}]`}onClick={handlesubmit}>{btn}</button>
    </div>
  }
    </>
  );
}