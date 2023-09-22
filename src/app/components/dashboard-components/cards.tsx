import React from 'react'
import Image from 'next/image'

const Cards = (props:any) => {

  return (
    <div key={props.card.id} className="flex flex-col lg:h-[130px] lg:w-[333px] min-[320px]:max-lg:h-[160px] min-[320px]:max-lg:w-[47%] bg-[#FFFFFF] px-[25px] py-[20px] rounded-[20px] border-2 shadow-xl justify-between">
      <div className='w-[30px] h-[30px] rounded-full p-[6px]' style={{backgroundColor: `${props.card.color}`}}>
        <Image 
          src={props.card.icon} 
          alt={`${props.card.icon} icon`}
          className='self-center'
        />
      </div>
      <p className='text-sm'>{props.card.name}</p>
      <div className='flex flex-row justify-between items-end'>
        <h1 className='text-2xl font-bold'>{props.card.value}</h1>
        <div className='h-[28px] w-[60px] bg-[#E9F9EB] rounded-full px-[8px] py-[4px]'>
          <p className='text-[#4AD15F] font-semibold'>{props.card.up}</p>
        </div>
      </div>
      
    </div>
    
  )
}

export default Cards