'use client';


import React, { Dispatch, ReactNode, SetStateAction, createContext, useState, useContext } from 'react';
import { useSession } from 'next-auth/react';


import Nav from './components/nav';
import Dashboard from './components/dashboard';
import Popup from './components/dashboard-components/popup';



export interface PopupContextInterface {
  popup: boolean,
  setPopup: Dispatch<SetStateAction<boolean>>
}

const defaultState = {
  popup: false,
  setPopup: (popup: boolean) => {}
} as PopupContextInterface

export const PopupContext = createContext(defaultState)

type PopupProviderProps = {
  children: ReactNode
}



export default function Home() {
  
  const [formData, setFormData] = React.useState<string>()
  const [popup, setPopup] = useState<boolean>(false)

  const {data: session, status} = useSession({
    required: true
  });

  if(status === "loading"){
    return <></>
  }

  return (
    <PopupContext.Provider value={{popup, setPopup}}>
      <div className='text-black'>
        {popup && <Popup setFormData={setFormData}/>}
        <main className="flex bg-[#F5F5F5] text-black min-h-screen p-[40px] grid antialiased lg:grid-cols-[20%_80%] min-[320px]:max-lg:grid-row-[20%_80%]">
          <Nav/>
          <div className='min-w-[100%] p-[15px]'>
            <Dashboard formData={formData}/>
          </div>
        </main>
      </div>
    </PopupContext.Provider>
  )
}
