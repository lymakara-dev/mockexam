import React from 'react'
function page() {
    const getForm = async () => {
        // Access the environment variables
        const clientId = process.env.CLIENT_ID;
        const clientSecret = process.env.CLIENT_SECRET;
        const tokenUrl = "https://techbox.developimpact.net/o/oauth2/token";
      
        // Ensure clientId and clientSecret are not undefined
        if (!clientId || !clientSecret) {
          console.error("Client ID or Client Secret is missing");
          return;
        }
      
        // Using URLSearchParams for the body
        const bodyParams = new URLSearchParams({
          grant_type: "client_credentials",
          client_id: clientId,
          client_secret: clientSecret,
        });
      
        try {
          // Fetch the access token
          const response = await fetch(tokenUrl, {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: bodyParams,
          });
      
          if (response.ok) {
            const data = await response.json();
            fetchRecord(data.access_token);
          } else {
            console.log("Error obtaining token");
          }
        } catch (error) {
          console.error("Error fetching token:", error);
        }
      };
      
  return (
    <div>hello
    </div>
  )
}

export default page

function fetchRecord(access_token: any) {
    throw new Error('Function not implemented.');
}
