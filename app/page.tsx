"use client";
import React, { useEffect, useState } from "react";

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

function page() {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [apiResponseData, setApiResponseData] = useState<data[]>([]);
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

  function fetchRecord(accessToken: string) {
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
        
      })
      .catch((error) => {
        console.log("Error fetching records:", error);
      });
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      getForm();
      console.log(apiResponseData);
  }, []);

  return <div>Landing Page
    {apiResponseData.length > 0 ? (
        <div><img src="https://techbox.developimpact.net/documents/1583719/1758150/Screenshot+from+2024-10-20+15-11-42.png/2c8e0e16-0074-2f49-db18-7ed82808c278?version=1.0&t=1730130351124&download=true&objectDefinitionExternalReferenceCode=eadd7ee4-55cf-14ea-67b1-ead0d3dfdf3e&objectEntryExternalReferenceCode=38d6c399-d57b-c5ae-516a-2bffce1bc651" alt=" " /></div>
      ) : (
        <div>Loading...</div>
      )}
  </div>;
}

export default page;
