import { ThemeSwitch } from '@/components/theme-switch'
import React from 'react'

function Exambar() {
  return (
    <nav className='flex justify-between bg-[#0A3A7A] w-[600px] p-2 rounded-xl'>
        <div className=''>
          <div className='flex items-center justify-center gap-2'>
            <img src="" alt="" />
            <h1>Math Exam</h1>
            <ThemeSwitch />
          </div>
        </div>
        <div>3/30 Questions</div>
    </nav>
  )
}

export default Exambar