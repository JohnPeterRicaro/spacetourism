import { createContext, useContext, useState } from "react";

const StateContext = createContext()

export const ContextProvider = ({children}) => {

    const [activeMenu, setActiveMenu] = useState(false)
    const [isArrKey, setIsArrKey] = useState(0);

    return(
        <StateContext.Provider value={{activeMenu, setActiveMenu, isArrKey, setIsArrKey}}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)