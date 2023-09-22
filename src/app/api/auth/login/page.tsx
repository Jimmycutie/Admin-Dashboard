'use client'

import React from 'react'
import { signIn} from 'next-auth/react'
import Image from 'next/image'

import discord from '../../../components/icons/discord.png'
import linkedin from '../../../components/icons/linkedin.png'
import twitter from '../../../components/icons/twitter.png'
import github from '../../../components/icons/github.png'
import githubButton from '../../../components/icons/github button.png'
import google from '../../../components/icons/google.png'
import Form from './form'


const SignInComponent = () => {
  async function handleGoogleSignIn() {
    signIn('google', {callbackUrl:'http://localhost:3000'})
  }
  async function handleGithubSignIn() {
    signIn('github', {callbackUrl:'http://localhost:3000'})
  }
  const logos = [
    github, twitter, linkedin, discord
  ]
  return (
    <div className='h-screen m-auto bg-[#F8FAFF] grid antialiased lg:grid-cols-[45%_55%]'>

      {/*Signup Logo Section */}
      <div className="min-[320px]:max-lg:h-[70%] bg-gradient-to-b from-[#4285F4] to-[#286DE0] w-[100%] lg:-skew-x-6">
        <div className='h-full lg:skew-x-6'>
          <div className='flex lg:flex-col min-[320px]:max-lg:flex-row h-full lg:w-[85%] min-[320px]:max-lg:w-full lg:px-[70px] lg:py-[60px] bg-gradient-to-b from-[#4285F4] to-[#286DE0] lg:justify-between min-[320px]:max-lg:justify-center items-center'>
            <h1 className='font-bold lg:text-[24px] min-[320px]:max-lg:text-[20px] lg:self-start justify-self-start min-[320px]:max-lg:hidden'>LOGO</h1>
            <h1 className='font-bold lg:text-[72px] min-[320px]:max-lg:text-[62px] text-normal'>Board<span className='motion-safe:animate-pulse'>.</span></h1>
            <div className='flex flex-row w-[300px] justify-between min-[320px]:max-lg:hidden'>
              {logos.map(
                item => <Image key={logos.length -1} src={item} alt='logos' className='w-[44px]'/>
              )}
            </div>
          </div>
        </div>
      </div>

      {/*Login Form */}
      <div className='text-black right flex flex-col justify-evenly items-center'>
        <div className='justify-start'>
          <div>
            <h1 className='font-bold text-[36px]'>Sign In</h1>
            <h4 className='font-normal text-[16px] mb-[30px]'>Sign in to your account</h4>
          </div>
          <div className='flex flex-row justify-between mb-[30px]'>
              <button 
                className='flex flex-row w-[180px] h-[30px] content-center bg-white py-1.5 rounded-lg p-5 text-[12px] text-[#858585]'
                onClick={handleGoogleSignIn}
              >
                <Image 
                  src={google}
                  className='w-[14px] mr-2 mt-0.5'
                  alt='google logo'
                />
                Sign in with Google
              </button>
              <button 
                className='flex flex-row w-[180px] h-[30px] content-center bg-white py-1.5 rounded-lg p-5 text-[12px] text-[#858585]'
                onClick={handleGithubSignIn}
              >
                <Image
                  src={githubButton}
                  className='w-[14px] mr-2 mt-0.5'
                  alt='github logo'
                />
                Sign in with Github
              </button>
          </div>
          <Form/>

          <span className='flex justify-center mt-3'><p>Don&apost have an account? <a className='text-[#346BD4]'>Register here</a></p></span>
        </div>
      </div>

    </div>
  )
}

export default SignInComponent