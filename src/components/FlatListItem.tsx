import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { MenuItem } from '../Interfaces/appInterface';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/core';


interface Props {
    menuItem: MenuItem
}

export const FlatListItem = ({ menuItem }: Props) => {

    const navigation = useNavigation()


    return (
        <TouchableOpacity
            activeOpacity={0.8} /** Opacidad Al pulsar  */
            onPress={() => navigation.navigate(menuItem.component)}/**Redireccionar a:  ...  */
        >
            <View style={styles.container}>
                <Icon
                    name={menuItem.icon}
                    size={23}
                    color="#5856D5"
                />
                <Text style={styles.itemText}>{menuItem.name}</Text>

                <View style={{ flex: 1 }} />

                <Icon
                    name="chevron-forward-outline"
                    size={23}
                    color="#5856D5"
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row'
    },
    itemText: {
        fontSize: 18,
        marginLeft: 10
    }
});

