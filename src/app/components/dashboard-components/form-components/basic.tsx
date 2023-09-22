import React from 'react'


const Basic = (props: any) => {
  return (
    <form>
        <div className='flex flex-col px-[24px] py-[16px]'>
            <label htmlFor='name' className='mb-[8px]'>Enter Name*</label>
            <input
                id='name'
                type='name'
                name='name'
                placeholder='Eg. John Doe'
                className='p-4 w-auto h-[48px] rounded-md bg-[#FFFAFF] mb-5 border-[1px] border-[#EBEBEB]'
                onChange={props.handleChange}
                value={props.name}
            />
            <label htmlFor='email' className='mb-[8px]'>Enter Email*</label>
            <input
                id='email'
                type='email'
                name='email'
                placeholder='Eg. John@xyz.com'
                className='p-4 w-auto h-[48px] rounded-md bg-[#FFFAFF] mb-5 border-[1px] border-[#EBEBEB]'
                onChange={props.handleChange}
                value={props.email}
            />
            <label htmlFor='phone' className='mb-[8px]'>Enter Phone*</label>
            <input
                id='phone'
                type='tel'
                name='phone'
                pattern="[0-9]{5}-[0-9]{5}"
                placeholder='Eg. 9123456789'
                className='p-4 w-auto h-[48px] rounded-md bg-[#FFFAFF] mb-5 font-normal border-[1px] border-[#EBEBEB]'
                onChange={props.handleChange}
                value={props.phone}
            />
        </div>
        <hr/>
        <div className='flex justify-end px-[24px] py-[24px]'>
            <button 
                className='bg-[#3E84F8] w-auto h-auto text-white font-normal text-[14px] px-5 py-3 rounded-xl h-[40px]'
                type='button'
                onClick={props.handleNext}
            >
                Next
            </button>
        </div>
    </form>
  )
}

export default Basic