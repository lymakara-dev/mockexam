import React from 'react'

function page() {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className="flex flex-grow-0 flex-col w-[50%]">
          <h2 className="font-bold text-center text-2xl">ITC Mock Exam</h2>
          <h2 className="font-bold">Dear Students,</h2>
          <p>
            We are thrilled to support you on your journey to the ITC entrance exam. As a team of dedicated IT students, we have built this mock exam system to help you prepare and succeed.

            This is our first year launching the platform, and while some features are still in progress, we are actively improving and expanding the system. By next year, we aim to deliver a fully developed platform that will provide meaningful support for all entrance exams, not just ITC.

            Thank you for your understanding and trust as we continue to grow and refine this system for your benefit.

            Wishing you the best of luck in your exams!</p>

          <h2 className="font-bold">Warm regards,</h2>

          <h2 className="font-bold">The Mock Exam Development Team</h2>

        </div>
        <div>
          <img src="/thankyou.gif" alt="Mock Exam Development Team" />
        </div>
    </div>
  )
}

export default page