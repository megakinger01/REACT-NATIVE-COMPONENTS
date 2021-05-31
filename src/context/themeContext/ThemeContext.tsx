import React, { createContext, useReducer } from 'react'
import { themeReducer, lightTheme, ThemeState } from './themeReducer';



interface ThemeContextProps {
    theme: ThemeState;
    SetDarkTheme: () => void;
    SetLightTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps)




export const ThemeProvider = ({ children }: any) => {

    const [theme, dispatch] = useReducer(themeReducer, lightTheme)



    const SetDarkTheme = () => {
        dispatch({ type: 'set_dark_theme' })
        console.log('setDarkTheme');

    }

    const SetLightTheme = () => {
        dispatch({ type: 'set_light_theme' })
        console.log('setLightTheme');
    }

    return (
        <ThemeContext.Provider value={{
            theme,
            SetDarkTheme,
            SetLightTheme
        }}>
            {children}
        </ThemeContext.Provider>
    )
}



