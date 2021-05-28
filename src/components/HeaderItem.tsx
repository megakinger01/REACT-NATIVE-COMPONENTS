import React from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { styles } from '../theme/appTheme'




interface Props {
    title: string
}
/** Encabezado de la lista */
export const HeaderItem = ({ title }: Props) => {

    const { top } = useSafeAreaInsets()

    return (
        <View style={{ marginTop: top + 20 }}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}
