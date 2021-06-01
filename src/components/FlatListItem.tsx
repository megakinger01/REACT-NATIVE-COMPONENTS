import React, { useContext } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { useNavigation } from '@react-navigation/core';

import { ThemeContext } from '../context/themeContext/ThemeContext';
import { MenuItem } from '../Interfaces/appInterface';
import Icon from 'react-native-vector-icons/Ionicons';


interface Props {
    menuItem: MenuItem
}

export const FlatListItem = ({ menuItem }: Props) => {

    const navigation = useNavigation()
    const { theme:{colors} } = useContext(ThemeContext)


    return (
        <TouchableOpacity
            activeOpacity={0.8} /** Opacidad Al pulsar  */
            onPress={() => navigation.navigate(menuItem.component)}/**Redireccionar a:  ...  */
        >
            <View style={styles.container}>
                <Icon
                    name={menuItem.icon}
                    size={23}
                    color={colors.primary}
                />
                <Text style={{...styles.itemText, color:colors.text}}>{menuItem.name}</Text>

                <View style={{ flex: 1 }} />

                <Icon
                    name="chevron-forward-outline"
                    size={23}
                    color={colors.primary}
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        marginVertical:6
    },
    itemText: {
        fontSize: 18,
        marginLeft: 10
    }
});

