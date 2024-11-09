export async function submitForm(email: string, password: string,lastname: string,firstname: string){
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
        postRecord(data.access_token,email,lastname,firstname,password);
    } else {
        console.log("Error");
    }
}
function postRecord(accessToken:any,email:string,lastname:string,firstname:string,password:string) {
  const jsonObject = {
    "email": email,
    "name": lastname + " " + firstname,
    "password": password
  };
	const url = 'https://techbox.developimpact.net/o/c/users/';

  fetch(url, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + accessToken
    },
    body: JSON.stringify(jsonObject)
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to create record');
      }
      return response.json();
    })
    .then(data => {
      // Record created successfully
      // alert("Record created successfully!");
      // router.push('/signin');
      window.location.href='/signin'
    })
    .catch(error => {
      alert("Error creating account. Please make sure you have good internet connectivity");
      console.log("Error creating record:", error);
    });
  }  