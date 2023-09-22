import React from 'react'

import phone from "../icons/phone.png"
import mail from "../icons/mail.png"
import insta from "../icons/insta.png"
import yt from "../icons/yt.png"
import Image from 'next/image'

const Info = (props:any) => {
  console.log(props.formData.name)
  const info =[
    {
      id:1,
      value: props.formData.phone,
      icon: phone,
    },
    {
      id: 2,
      value: props.formData.email,
      icon: mail,
    },
    {
      id: 3,
      value: props.formData.insta,
      icon: insta,
    },
    {
      id: 4,
      value: props.formData.yt,
      icon: yt,
    },
  ]
  return (
    <div className='flex flex-col h-[250px] lg:w-[50%] min-[320px]:max-lg:w-[100%] bg-white px-[40px] py-[30px] rounded-[20px] border-2 shadow-xl'>
        <h1 className='text-2xl font-semibold mb-[60px]'>{props.formData.name}</h1>
        <div className='grid grid-cols-2 grid-flow-row gap-y-[22px] gap-x-[50px]'>
          <div className='flex flex-row space-x-[12px] items-center'>
            <Image src={phone} alt='phone logo' className='h-[32px] w-[32px]'/>
            <p className='text-md underline'>{props.formData.phone}</p>
          </div>
          <div className='flex flex-row space-x-[12px] items-center'>
            <Image src={insta} alt='phone logo' className='h-[32px] w-[32px]'/>
            <a href={props.formData.insta} className='text-md underline'>{props.formData.name}_official</a>
          </div>
          <div className='flex flex-row overflow-auto space-x-[12px] items-center'>
            <Image src={mail} alt='phone logo' className='h-[32px] w-[32px]'/>
            <p className='text-md underline'>{props.formData.email}</p>
          </div>
          <div className='flex flex-row space-x-[12px] items-center'>
            <Image src={yt} alt='phone logo' className='h-[32px] w-[32px]'/>
            <a href={props.formData.yt} className='text-md underline'>{props.formData.name}_official</a>
          </div>
          
        </div>
    </div>
  )
}

export default Info