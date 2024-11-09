// lib/api.ts
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

async function getAccessToken(){

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
      return data.access_token
  } else {
      console.log("Error");
  }
}

export async function fetchUser() {
  const url = "https://techbox.developimpact.net/o/c/users/?pageSize=-1";

  const accessToken = await getAccessToken();

  try {
    const response = fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    })
    if (!(await response).ok) {
      throw new Error("Network response was not ok");
    }
    const data = await (await response).json();
    return Array.isArray(data)? data : data.items || [];
  } catch (error) {
    console.log(error);
    
  }
}