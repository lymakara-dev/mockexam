// 'use client'
// import React, { useEffect } from 'react'

// interface Quiz2 {
//   id : string;
// }

// interface Data {
//     id: number;
//     picquestions: {
//       id: number;
//       link: {
//         href: string;
//         label: string;
//       };
//       name: string;
//     };
//     multiplechoices: number;
//     solution: { // Changed from answer to solution
//       id: number;
//       link: {
//         href: string;
//         label: string;
//       };
//       name: string;
//     };
//     answer: {
//         id: number;
//         link: {
//           href: string;
//           label: string;
//         };
//         name: string;
//       };
//     correctedAns: number;
//     type: {
//       key: string;
//       name: string;
//     };
//     year: {
//       key: string;
//       name: string;
//     };
//     status: { // Added status if you plan to use it
//       code: number;
//       label: string;
//       label_i18n: string;
//     };
//   }
  
// function Page() {
//   const [testquestion, setTestQuestion] = React.useState<Data[]>([]); // Use useState for testquestion
//   const [isLoading, setIsLoading] = React.useState(true);

//   const getForm = async () => {
//     const clientId = 'id-ff33fd67-2662-23d2-e387-7e660796b71';
//     const clientSecret = 'secret-16433662-63e6-dea2-91b5-c0be0d0db7c';
//     const tokenUrl = 'https://techbox.developimpact.net/o/oauth2/token';
    
//     // Fetch the access token
//     const response = await fetch(tokenUrl, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/x-www-form-urlencoded'
//         },
//         body: new URLSearchParams({
//             'grant_type': 'client_credentials',
//             'client_id': clientId,
//             'client_secret': clientSecret
//         })
//     });
    
//     if (response.ok) {
//         const data = await response.json();
//         fetchRecord(data.access_token);
//     } else {
//         console.log("Error obtaining token");
//     }
//     };
    
//     function fetchRecord(accessToken:string) {
//       const url = 'https://techbox.developimpact.net/o/c/mockquestions/';
      
//       fetch(url, {
//           method: 'GET',
//           headers: {
//               "Content-Type": "application/json",
//               "Authorization": "Bearer " + accessToken
//           }
//       })
//       .then(response => {
//           if (!response.ok) {
//               throw new Error('Network response was not ok');
//           }
//           return response.json();
//       })
//       .then(data => {
//           if (data.items && Array.isArray(data.items)) {
//               setTestQuestion(data.items); // Set testquestion with the API response
//               setIsLoading(false);
//           } else {
//               console.log("Unexpected data format:", data);
//           }
//       })
//       .catch(error => {
//           console.log("Error fetching records:", error);
//       });
//     }

//     useEffect(() => {
//         getForm()
//     }, []);
//     const url = "https://techbox.developimpact.net";

//   return (
//     <div>
//       {isLoading ? "Loading..." :
//       <div>
//           {testquestion[0]?.answer?.link?.href ?
//             <img
//               alt="Tests Question"
//               height={0}
//               sizes="100vw"
//               src={url+testquestion[0].picquestions.link.href}
//              style={{ width: "100%", height: "100" }}
//              width={0}
//            /> : "Content not found"}
//            {testquestion[0]?.answer?.link?.href ?
//              <img
//              alt="Tests Question"
//              height={0}
//              sizes="100vw"
//              src={url+testquestion[0].answer.link.href}
//              style={{ width: "100%", height: "100" }}
//              width={0}
//              />
//              :
//              ""
//            }
//       </div>
//       }
      
//     </div>
//   )
// }

// export default Page;

// //         <img
// //           alt="Tests Question"
// //           height={0}
// //           sizes="100vw"
// //           src={url+testquestion[0].picquestions.link.href}
// //          style={{ width: "100%", height: "100" }}
// //          width={0}
// //        /> 