import MyNavBar from '@/components/MyNavBar';
import App from '@/components/sidebar';
import React from 'react'

function page() {
  return (
    <>
    <MyNavBar/>
    <App/>
    <h1>You are login with cookies set to 2mn and all routes are protected with middleware </h1>
    </>
  )
}

export default page;
