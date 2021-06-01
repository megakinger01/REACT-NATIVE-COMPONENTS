import React, { useContext, useState } from 'react'
import { StyleSheet, Switch, Text, View } from 'react-native'
import { CustomSwitch } from '../components/CustomSwitch'
import { HeaderItem } from '../components/HeaderItem'
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const SwitchScreen = () => {

    const {theme:{colors}} = useContext(ThemeContext)


    const [state, setState] = useState({
        isActive: true,
        isHungry: false,
        isHappy: true
    })

    const { isActive, isHappy, isHungry } = state

    const onChangeState = (value: boolean, field: string) => {

        setState({
            ...state,
            [field]: value
        })
    }

    return (
        <View style={{ marginHorizontal: 20 }}>

            <HeaderItem title="switch" />

            <View style={styles.switchRow}>
                <Text style={styles.switchText}>Is active</Text>
                <CustomSwitch isON={isActive} onChange={(value) => onChangeState(value, 'isActive')} />
            </View>


            <View style={styles.switchRow}>
                <Text style={styles.switchText}>Is Hungry</Text>
                <CustomSwitch isON={isHungry} onChange={(value) => onChangeState(value, 'isHungry')} />
            </View>


            <View style={styles.switchRow}>
                <Text style={styles.switchText}>Is Happy</Text>
                <CustomSwitch isON={isHappy} onChange={(value) => onChangeState(value, 'isHappy')} />
            </View>

            <Text style={{...styles.switchText, color:colors.text }}>
                {
                    JSON.stringify(state, null, 5)
                }
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({

    switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    switchText: {
        fontSize: 25
    }
});
