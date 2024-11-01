// const getForm = async () => {
//     const clientId = "id-ff33fd67-2662-23d2-e387-7e660796b71";
//     const clientSecret = "secret-16433662-63e6-dea2-91b5-c0be0d0db7c";
//     const tokenUrl = "https://techbox.developimpact.net/o/oauth2/token";

//     // Fetch the access token
//     const response = await fetch(tokenUrl, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded",
//       },
//       body: new URLSearchParams({
//         grant_type: "client_credentials",
//         client_id: clientId,
//         client_secret: clientSecret,
//       }),
//     });

//     if (response.ok) {
//       const data = await response.json();

//       fetchRecord(data.access_token);
//     } else {
//       console.log("Error obtaining token");
//     }
//   };

//   function fetchRecord(accessToken: string) {
//     const url = "https://techbox.developimpact.net/o/c/mockquestions/";

//     // Clear the users array to avoid duplication
//     fetch(url, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: "Bearer " + accessToken,
//       },
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }

//         return response.json();
//       })
//       .then((data) => {
//         if (Array.isArray(data)) {
//           data.forEach((record) => {
//           });
//         } else {
//           if (data.items && Array.isArray(data.items)) {
//             data.items.forEach((record: Quiz2) => {
//               console.log(data);
              
              
//             });
//           } else {
//             console.log("Unexpected data format:", data);
//           }
//         }
//       })
//       .catch((error) => {
//         console.log("Error fetching records:", error);
//       });
//   }

