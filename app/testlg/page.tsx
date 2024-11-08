"use client";
import React, { useEffect, useState } from "react";

interface ExamHistory {
  email: string;
  score: number;
  type: string; // Type can be 'math', 'logical', 'chemistry', 'physics', etc.
}

function Page() {
  const [users, setUsers] = useState<ExamHistory[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<ExamHistory[]>([]);
  const userEmail = "user@example.com"; // Replace with actual logged-in user's email

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
    const url =
      "https://techbox.developimpact.net/o/c/mockresults/?pageSize=15";

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

        // Check if data has items array and then filter client-side by email
        if (data.items && Array.isArray(data.items)) {
          setUsers(data.items);
          const userRecords = data.items.filter(
            (record: ExamHistory) => record.email === userEmail
          );
          setFilteredUsers(userRecords);
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
      {filteredUsers.length > 0 ? (
        <ul>
          {filteredUsers.map((data, index) => (
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
      <div>
        <select name="" id="">
          <option value="">1</option>
          <option value="">2</option>
        </select>
      </div>
      ;
    </section>
  );
}

export default Page;
