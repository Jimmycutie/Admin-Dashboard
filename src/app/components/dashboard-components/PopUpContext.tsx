import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";

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
export default function PopupProvider({children}: PopupProviderProps) {
    const [popup, setPopup] = useState<boolean>(false)

    return(
        <PopupContext.Provider value={{popup, setPopup}}>
            {children}
        </PopupContext.Provider>
    )
}
