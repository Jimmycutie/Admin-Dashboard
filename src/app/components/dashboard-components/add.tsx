import React, { useContext } from 'react'
import Image from 'next/image'



import button from '../icons/button.png'
import { PopupContext } from '@/app/page'




const Add = () => {
  const {popup, setPopup} = useContext(PopupContext)
  const handleClick = () => {
    setPopup(!popup)
    console.log(popup)
  }
  return (
    <button onClick={handleClick} className='flex flex-col h-auto lg:w-[50%] min-[320px]:max-lg:w-[100%] bg-white px-[40px] py-[30px] rounded-[20px] justify-center items-center border-2 shadow-xl'>
      <Image 
        src={button} 
        alt="add button"
        className='w-[77px]'
      />
      <h1>Add profile</h1>
    </button>
  )
}

export default Add