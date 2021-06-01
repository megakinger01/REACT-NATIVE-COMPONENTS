import React, { useContext } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { HeaderItem } from '../components/HeaderItem';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const ChangeThemeScreen = () => {

    const { SetDarkTheme, SetLightTheme, theme:{colors} } = useContext(ThemeContext)

    return (
        <View>
            <HeaderItem title="Theme" />

            <View style={{flexDirection:'row', justifyContent:'space-between'}}>

                    <TouchableOpacity
                        style={{...styles.btn, backgroundColor:colors.primary}}
                        onPress={SetLightTheme}
                    >
                        <Text style={styles.textBtn}>
                            light
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.btn}
                        onPress={SetDarkTheme}
                    >
                        <Text style={styles.textBtn}>
                            dark
                        </Text>
                    </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({

    btn: {
        backgroundColor: '#5856D6',
        height: 40,
        width: 120,
        borderRadius: 15,
        marginTop: 20,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textBtn: {
        color: 'white',

    }
});
