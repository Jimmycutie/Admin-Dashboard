import React from 'react'
import { useFormik } from 'formik'
import { useContext } from 'react'
import Image from 'next/image'

import Cross from '../icons/cross.png'
import Basic from './form-components/basic'
import Contact from './form-components/contact'
import { PopupContext } from '@/app/page'




const Popup = (props:any) => {
    const formik = useFormik({
        initialValues:{
            name: '',
            email:'',
            phone: '',
            insta: '',
            yt: ''
        },
        onSubmit: (values) => {
            // alert(JSON.stringify(values, null, 2));
            props.setFormData(() => values)
            handleClick()
        },
    })


    const {popup, setPopup} = useContext(PopupContext)
    const handleClick = () => {
        setPopup(!popup)
    }

    const [curr, setCurr] = React.useState(0)

    // const [formData, setFormData] = React.useState(formik.values)
    const handleNext = () =>{
        setCurr(prev => prev+1)
    }

    const handleBack = () => {
        setCurr(prev => prev-1)
    }
    
    const steps = [
        <Basic 
            key = {1}
            handleNext={handleNext}
            handleChange={formik.handleChange}
            name={formik.values.name}
            email={formik.values.email}
            phone={formik.values.phone}
        />,
        <Contact 
            key = {2}
            handleSubmit={formik.handleSubmit}
            handleBack = {handleBack}
            handleChange={formik.handleChange}
            insta={formik.values.insta}
            yt={formik.values.yt}
        />
    ]

    return (
        <section className='!fixed flex w-full h-full bg-black/[0.6] items-center justify-center'>
        
            <div className='flex flex-col w-[544px] h-auto rounded-[18px] bg-[#FFFAFF]'>
                <div className='flex flex-row justify-between px-[24px] py-[16px]'>
                    <h1 className='font-semibold text-[20px]'>Add New Profile</h1>
                    <button>
                        <Image 
                            src={Cross} 
                            alt='cross'
                            className='w-[24px]'
                            onClick={handleClick}
                        />
                    </button>
                </div>
                <hr/>
                <div className='flex flex-row justify-evenly px-[24px] py-[24px]'>
                    <button className={`relative font-semibold text-base w-[40%] after:content-[""] after:h-[5px] after:w-[100%] after:bg-[${curr===0 ? "#3F84F8": "#D9D9D9"}] after:left-0 after:bottom-[-20px] after:absolute after:rounded-[5px]`}>Basic</button>
                    <button className={`relative font-semibold text-base w-[40%] after:content-[""] after:h-[5px] after:w-[100%] after:bg-[${curr===1 ? "#3F84F8": "#D9D9D9"}] after:left-0 after:bottom-[-20px] after:absolute after:rounded-[5px]`}>Contact</button>
                </div>
                {
                    steps[curr]
                }
            </div>
        
        </section>
    )
}

export default Popup