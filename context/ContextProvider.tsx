import React, { useContext, useState } from 'react';

const StateContext =  React.createContext({});

export const ContextProvider = ({ children }:any) => {
    const [currentMode, setCurrentMode] = useState('Light');
    const [textColor, setTextColor] = useState('black');
    
    const setMode = (e:any) => {
        setCurrentMode(e.target.value);
        localStorage.setItem('themeMode', e.target.value)
        setTextColor(currentMode == "Light" ? "white" : "black");
    } 


  return (
    <StateContext.Provider
        value={{ 
            currentMode,
            setMode ,
            textColor
        }}
    >
        {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext)