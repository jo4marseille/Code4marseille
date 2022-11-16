import React, {useState, createContext} from "react";


export const JOContext = createContext();

export const JOConsumer = ({ children }) => 
{
    const [JO, setJO] = useState([0,1,2]);

    return (
        <JOContext.Provider value={{JO, setJO}}>
            {children}
        </JOContext.Provider>
    )
}