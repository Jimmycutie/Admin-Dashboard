import React from 'react'


const Contact = (props: any) => {
  return (
    <form onSubmit={props.handleSubmit}>
        <div className='flex flex-col px-[24px] py-[16px]'>
        <label htmlFor='insta' className='mb-[8px]'>Instagram Link</label>
            <input
                id='insta'
                type='url'
                name='insta'
                placeholder='Eg. ..instagram.com/username'
                className='p-4 w-auto h-[48px] rounded-md bg-[#FFFAFF] mb-5 border-[1px] border-[#EBEBEB]'
                onChange={props.handleChange}
                value={props.insta}
            />
            <label htmlFor='yt' className='mb-[8px]'>Youtube Link</label>
            <input
                id='yt'
                type='url'
                name='yt'
                placeholder='Eg. ..youtebe/username'
                className='p-4 w-auto h-[48px] rounded-md bg-[#FFFAFF] mb-5 border-[1px] border-[#EBEBEB]'
                onChange={props.handleChange}
                value={props.yt}
            />
        </div>
        <hr/>
        <div className='flex justify-end px-[24px] py-[24px] space-x-[10px]'>
            <button type='button' className='w-auto h-auto border-[1px] border-[#999CA0] text-black font-semibold text-sm px-5 py-3 rounded-xl h-[40px]' onClick={props.handleBack}>Back</button>
            <button 
                className='bg-[#3E84F8] w-auto h-auto text-[#FFFFFF] font-semibold text-sm px-5 py-3 rounded-xl h-[40px]'
                type='submit'
            >
                Done
            </button>
        </div>
    </form>
  )
}

export default Contact