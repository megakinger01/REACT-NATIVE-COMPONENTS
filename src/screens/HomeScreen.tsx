import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FlatListItem } from '../components/FlatListItem';
import { MenuItem } from '../Interfaces/appInterface';
// import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../theme/appTheme';



const menuItems: MenuItem[] =[   
    {
        name : 'animation 101',
        icon : 'cube-outline',
        component : 'Animation101Screen'
    },
    {
        name : 'animation 102',
        icon : 'albums-outline',
        component : 'Animation102Screen'
    },
]


export const HomeScreen = () => {

   const {top} = useSafeAreaInsets()

    /** Encabezado de la lista */
    const headerList = () => {
        return (
            <View style={{marginTop:top +20}}>
                <Text style={styles.title}>Opciones de menú</Text>
            </View>
        )
    }

    /**Linea separadora de la lista */
    const linea = () =>{
        return(
            <View style={{borderBottomWidth:1 , opacity:0.4}}>

            </View>
        )
    }

    return (
        <View style={{flex:1 , ...styles.globalMargin}}>

            <FlatList 
                data={ menuItems }
                renderItem={ ({item}) => <FlatListItem menuItem={item} /> } /**items de la lista */
                keyExtractor={(item) => item.name}
                ListHeaderComponent={ ()=> headerList() }   /** Encabezado de la lista */
                ItemSeparatorComponent={ linea }            /**Linea separadora de la lista */
            />
        </View>
    )
}
