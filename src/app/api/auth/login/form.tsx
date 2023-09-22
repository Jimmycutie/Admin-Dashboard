import React from 'react'
import { useFormik } from 'formik'
import { signIn } from 'next-auth/react';

const Form = () => {
    const formik = useFormik({
        initialValues:{
          email:'johndoe@gmail.com',
          password:'nextauth'
        },
        onSubmit:(values)=>{
            signIn('credentials', {
                email: values.email,
                password: values.password,
                callbackUrl: "http://localhost:3000/"
            })
            console.log(values)
        },
    })
  return (
    <>
        <form onSubmit={formik.handleSubmit} 
            className='w-[385px] h-[330px] flex flex-col p-[30px] bg-white rounded-[20px]'
        >
            <label htmlFor='email' className='mb-[8px]'>Email address</label>
            <input
                id='email'
                type='email'
                className='p-4 w-auto h-[40px] rounded-xl bg-[#F5F5F5] mb-5'
                {...formik.getFieldProps('email')}
            />
            <label htmlFor='password' className='mb-[8px]'>Password</label>
            <input
                id='password'
                type='password'
                className='p-4 w-auto h-[40px] rounded-xl bg-[#EAEAEA] mb-5 font-bold'
                {...formik.getFieldProps('password')}
            />
            <a href='forgotpassword.com' className='mb-4 text-[#346BD4]'>Forgot password?</a>
            <button type="submit" className='bg-[#4285F4] text-white font-bold p-2 rounded-lg h-[40px]'>Sign In</button>
        </form>
    </>
    
  )
}

export default Form