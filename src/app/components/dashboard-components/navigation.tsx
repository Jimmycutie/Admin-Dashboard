import React from 'react'
import Image from 'next/image'
import { signOut } from 'next-auth/react'

import search from '../icons/search_icon.png'
import notif from '../icons/notification_icon.png'
import user from '../icons/userpf_icon.png'


const PopUp = () => {
  return(
    <div className='absolute right-[2%] top-[10%] bg-white p-[5px] rounded-lg border-2 shadow-xl'> 
      <button 
        className='bg-[#4285F4] text-white text-sm font-bold rounded-lg p-[10px]'
        onClick={(e) => {
          e.preventDefault()
          signOut({ callbackUrl: 'http://localhost:3000/api/auth/login?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2F&error=SessionRequired' })
        }}
      >
        Sign Out
      </button>
    </div>
  )
}

const Navigation = () => {
  const [popUp, setPopUp] = React.useState(false)
  return (
    <nav className='lg:flex flex-row min-[320px]:max-lg:hidden justify-between items-center h-[30px]'>
        <h3 className='lg:text-[24px] min-[320px]:max-lg:text-[20px] font-bold leading-7'>Dashboard</h3>
        <div className='flex flex-row items-center space-x-[30px]'>
          <form 
              action="/action_page.php"
          >
              <input 
                  type="text" 
                  placeholder="Search.." 
                  name="search"
                  className='h-[30px] w-[160px] px-[15px] py-[7px] rounded-l-[10px]'
              />
              <button type="submit" className='bg-white h-[30px] w-[25px] rounded-r-[10px]'><Image src={search} alt='search icon' className='w-[12px] h-[12px] mt-[-1px]'/></button>
          </form>
          <Image src={notif} alt='notification icon' className='h-[20px] w-[18px]'/>
          <button onClick={() => setPopUp(!popUp)}>
            <Image src={user} alt='user profile picture' className='h-[30px] w-[30px]'/>
          </button>
          {popUp ? <PopUp /> : ""}
        </div>
    </nav>
  )
}

export default Navigation