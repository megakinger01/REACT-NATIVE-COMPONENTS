import React, { useState } from 'react'
import { RefreshControl, ScrollView, View } from 'react-native'
import { HeaderItem } from '../components/HeaderItem'

export const PullTorefreshScreen = () => {

    const [refreshing, setRefreshing] = useState(false)
    const [data, setData] = useState<string>('')

    const onRefresh = () => {
        setRefreshing(true)

        setTimeout(() => {
            setRefreshing(false)
            console.log('terminamos');
            setData('hola mundo')

        }, 2500);

        setTimeout(() => {

            setData('')

        }, 500);
    }

    return (
        <ScrollView
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    progressViewOffset={10} /**Distancia top del logo de load solo android */
                    progressBackgroundColor="#5856D6" /**FONDO DEL  REFRESH ANDROID */
                    colors={['orange', 'red', 'green']} /**COLOR DE LA FLECHA ANDROID */

                    style={{ backgroundColor: '#5856D6' }}/**FONDO DEL  REFRESH IOS */
                    tintColor="white" /**COLOR DE LA FLECHA IOS */


                />
            }
        >
            <View>
                <HeaderItem title="Pull to refresh" />
                <HeaderItem title={data} />
            </View>
        </ScrollView>
    )
}
