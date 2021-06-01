import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { styles } from '../theme/appTheme'
import { ThemeContext } from '../context/themeContext/ThemeContext';




interface Props {
    title: string
}
/** Encabezado de la lista */
export const HeaderItem = ({ title }: Props) => {

    const { top } = useSafeAreaInsets()
    const {theme:{colors}} = useContext(ThemeContext)

    return (
        <View style={{ marginTop: top + 20 }}>
            <Text style={{...styles.title, color:colors.text}}>{title}</Text>
        </View>
    )
}
