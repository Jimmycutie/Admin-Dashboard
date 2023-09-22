import React from 'react'
import { signOut } from 'next-auth/react'

import dashboard from './icons/dashboard_icon.png'
import transaction from './icons/Vector.png'
import schedule from './icons/schedule_icon.png'
import users from './icons/user_icon.png'
import settings from './icons/setting_icon.png'
import menu from './icons/menu.png'
import search from './icons/search-white.png'
import notif from './icons/notification-white.png'
import user from './icons/userpf_icon.png'
import Image from 'next/image'


const PopUp = () => {
    return(
      
        <button 
            className='absolute right-[5%] top-[9%] bg-[#4285F4] text-white text-sm font-bold rounded-lg p-[10px] border-2 shadow-xl'
            onClick={(e) => {
            e.preventDefault()
            signOut({ callbackUrl: 'http://localhost:3000/api/auth/login?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2F&error=SessionRequired' })
            }}
        >
            Sign Out
        </button>
    )
}

const Nav = () => {
    const menuItems = [
        {
            icon: dashboard,
            name: "Dashboard"
        },
        {
            icon: transaction,
            name: "Transactions"
        },{
            icon: schedule,
            name: "Schedules"
        },{
            icon: users,
            name: "Users"
        },{
            icon: settings,
            name: "Settings"
        },
    ]
    const [popUp, setPopUp] = React.useState(false)
    const [flip, setFlip] = React.useState(false)
  return (
    <nav className='flex w-full'>
        <div className='flex lg:flex-col min-[320px]:max-lg:flex-row bg-gradient-to-b from-[#4285F4] to-[#3C83F9] text-white lg:h-[91vh] min-[320px]:max-lg:h-[5vh] lg:w-[90%]  lg:min-w-[80%] lg:items-start lg:justify-between px-10 lg:py-12 rounded-[30px] min-[320px]:max-lg:items-center min-[320px]:max-lg:justify-between min-[320px]:max-lg:w-[100%]'>
            <Image onClick={() => setFlip(!flip)} src={menu} alt={'menu'} className='lg:hidden w-[16px] h-[16px] mr-[15%]'/>
            <h1 className='font-bold text-[36px] text-normal lg:mb-[60px] min-[320px]:max-lg:text-[30px]'>Board.</h1>

            <div className='space-y-10 mb-auto text-[18px] lg:inline-block min-[320px]:max-lg:hidden'>
                {menuItems.map(item => {
                    return(
                        <button key={item.name}className='flex flex-row space-x-[20px] align-center'>
                            <Image src={item.icon} alt={item.name} className='w-[18px] h-[18px] mt-[3px]'/>
                            <p>{item.name}</p>
                        </button>
                    )})
                }
            </div>


            <div className='lg:flex flex-col min-[320px]:max-lg:hidden space-y-[20px] text-[14px] font-normal'>
                <p>Help</p>
                <p>Contact Us</p>
            </div>

            <div className='min-[320px]:max-lg:flex lg:hidden flex-row items-center space-x-[20px]'>
                <button className='rounded-r-[10px]'><Image src={search} alt='search icon' className='w-[16px] h-[16px]'/></button>
                <Image src={notif} alt='notification icon' className='h-[20px] w-[18px]'/>
                <button onClick={() => setPopUp(!popUp)}>
                    <Image src={user} alt='user profile picture' className='h-[25px] w-[25px]'/>
                </button>
                {popUp ? <PopUp /> : ""}
            </div>
        </div>
        
        {/* Popup navbar on menu button click*/}
        {flip ?
            <div className='absolute left-[5%] top-[9%] bg-[#4285F4] p-[20px] text-[#FFFFFF] font-medium rounded-[15px] border-2 shadow-xl space-y-2 mb-auto text-[18px] min-[320px]:max-lg:flex min-[320px]:max-lg:flex-col '>
                {menuItems.map(item => {
                    return(
                        <button key={item.name}className='flex flex-row space-x-[20px] align-center'>
                            <Image src={item.icon} alt={item.name} className='w-[18px] h-[18px] mt-[3px]'/>
                            <p>{item.name}</p>
                        </button>
                    )})
                }
            </div> : ""
        }
    </nav>
  )
}

export default Nav