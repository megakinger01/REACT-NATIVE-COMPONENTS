import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import { ThemeContext } from '../context/themeContext/ThemeContext'

export const ItemSeparator = () => {

    const {theme:{dividerColor}} = useContext(ThemeContext)

    /**Linea separadora de la lista */

    return (
        <View style={{
            borderBottomWidth: 1, 
            opacity: 0.4,  
            borderBottomColor:dividerColor} } />

       
    )
}


