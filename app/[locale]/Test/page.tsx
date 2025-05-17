import LanguageSwitcher from '@/components/NavBar/LanguageSwitch'
import React from 'react'
export const runtime = 'edge';
function page() {
  return (
    <div>
        {/* <h1>TEST PAGE</h1>
        <p>Git ignore will block from local push.</p> */}
        <LanguageSwitcher/>
    </div>
  )
}

export default page