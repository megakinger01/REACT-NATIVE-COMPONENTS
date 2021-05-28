import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FlatListItem } from '../components/FlatListItem';
import { menuItems } from '../data/menuItems';
import { MenuItem } from '../Interfaces/appInterface';
import { styles } from '../theme/appTheme';
import { HeaderItem } from '../components/HeaderItem';
import { ItemSeparator } from '../components/ItemSeparator';



export const HomeScreen = () => {







    return (
        <View style={{ flex: 1, ...styles.globalMargin }}>

            <FlatList
                data={menuItems}
                renderItem={({ item }) => <FlatListItem menuItem={item} />} /**items de la lista */
                keyExtractor={(item) => item.name}
                ListHeaderComponent={() => < HeaderItem title="Opciones de menú" />}   /** Encabezado de la lista */
                ItemSeparatorComponent={() => <ItemSeparator />}            /**Linea separadora de la lista */
            />
        </View>
    )
}
