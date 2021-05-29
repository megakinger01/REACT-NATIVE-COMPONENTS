import React, { useState } from 'react'
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { FadeImage } from '../components/FadeImage';
import { HeaderItem } from '../components/HeaderItem';


export const InfinityScrollScreen = () => {

    const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5])

    const loadMore = () => {

        const newArray: number[] = [];
        for (let i = 0; i < 5; i++) {
            newArray[i] = numbers.length + i;

        }
        setNumbers([...numbers, ...newArray])
    }

    const renderItem = (item: number) => {
        return (

            <FadeImage
                uri={`https://picsum.photos/id/${item}/500/400`}
                style={{
                    height: 400,
                    width: '100%'
                }}
            />

        )
    }


    return (
        <View style={{ flex: 1 }}>


            <FlatList
                data={numbers}
                keyExtractor={(item) => item.toString()}
                renderItem={({ item }) => renderItem(item)}

                ListHeaderComponent={() => (

                    <View style={{ marginHorizontal: 20, marginVertical: 10 }}>
                        <HeaderItem title="Infinity Scroll" />
                    </View>


                )}

                onEndReached={loadMore}
                onEndReachedThreshold={0.5}

                ListFooterComponent={() => {
                    return (
                        <View style={{
                            height: 150,
                            width: '100%',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <ActivityIndicator size={25} color="black" />
                        </View>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    textItem: {
        backgroundColor: 'green',
        height: 150,
    }

});
