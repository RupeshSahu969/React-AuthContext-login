import React,{useState,createContext} from "react";


export const themeContext =createContext();

export const ThemeProvider= ({children}) =>{

    const [theme,settheme] =useState("light")


    const toggleTheme =() => {
        if(theme === "light")
        {
            settheme("dark")
        }
        else{
            settheme("light")
        }
    };

    return(


<themeContext.Provider
value={{
    theme,
    isLight:theme === "light",
    toggleTheme,
}}
>
{children}
</themeContext.Provider>

    )
}

