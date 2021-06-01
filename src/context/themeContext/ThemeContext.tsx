import React, { createContext, useEffect, useReducer } from 'react'
import { Appearance, AppState } from 'react-native';
import { themeReducer, lightTheme, ThemeState, darkTheme } from './themeReducer';



interface ThemeContextProps {
    theme: ThemeState;
    SetDarkTheme: () => void;
    SetLightTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps)




export const ThemeProvider = ({ children }: any) => {

    const [theme, dispatch] = useReducer(
                    themeReducer,                                                       /**ESCOJE EL REDUCER */
                    ( Appearance.getColorScheme()=== 'dark')? darkTheme : lightTheme ) /*PREGUNTA? */


        /**CONFIGURACION PARA EL TEMA DEPENDIENDO DEL COLOR DEL  SISTEMA OPERATIVO  */
    useEffect(() => {
        AppState.addEventListener('change', (status) => {

            if (status === 'active') {
                ( Appearance.getColorScheme()=== 'light')
                ? SetLightTheme()
                : SetDarkTheme()
            }
        })
    }, [])                



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



