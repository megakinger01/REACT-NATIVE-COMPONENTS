import React from 'react'
import { Alert, Button, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { HeaderItem } from '../components/HeaderItem'

export const AlertScreen = () => {

    const mostrarAlerta = () => {

        Alert.alert(
            "Titulo",
            "Mensaje de la alerta",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: 'destructive'
                },
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ],
            {
                cancelable: true  /**ME DEJA HACER CLICK FUERA DE LA ALERTA SOLO PARA ANDROID */
            }
        );
    }


    return (
        <View style={styles.globalMargin}>
            <HeaderItem title="Alerts" />

            <Button
                title="alerta"
                onPress={mostrarAlerta}
            />
        </View>
    )
}
