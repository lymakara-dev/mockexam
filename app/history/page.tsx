"use client";
import React, { useEffect, useState } from "react";

interface ExamHistory {
  email: string;
  score: number;
  type: string; // Type can be 'math', 'logical', 'chemistry', 'physics', etc.
}

function Page() {
  const [users, setUsers] = useState<ExamHistory[]>([]);

  const getForm = async () => {
    const clientId = "id-ff33fd67-2662-23d2-e387-7e660796b71";
    const clientSecret = "secret-16433662-63e6-dea2-91b5-c0be0d0db7c";
    const tokenUrl = "https://techbox.developimpact.net/o/oauth2/token";

    try {
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
    } catch (error) {
      console.log("Error during token fetch:", error);
    }
  };

  const fetchRecord = async (accessToken: string) => {
    const url = "https://techbox.developimpact.net/o/c/mockresults/?pageSize=15";

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Fetched data:", data); // Log data to verify structure

        // Ensure data.items is an array before updating state
        if (data.items && Array.isArray(data.items)) {
          setUsers(data.items);
        } else {
          console.log("Unexpected data format:", data);
        }
      } else {
        console.log("Network response was not ok");
      }
    } catch (error) {
      console.log("Error fetching records:", error);
    }
  };

  useEffect(() => {
    getForm();
  }, []);

  return (
    <section>
      <h2>Exam History</h2>
      {users.length > 0 ? (
        <ul>
          {users.map((data, index ) => (
            <li key={index}>
              <p>Email: {data.email}</p>
              <p>Score: {data.score}</p>
              <p>Type: {data.type}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No exam history available</p>
      )}
    </section>
  );
}

export default Page;
