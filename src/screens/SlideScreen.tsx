import { StackScreenProps } from '@react-navigation/stack';
import React, { useContext, useRef, useState } from 'react'
import { Dimensions, Image, ImageSourcePropType, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Animated } from 'react-native';


import Carousel, { Pagination } from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Ionicons';
import { useFadeAndAnimatios } from '../hooks/useFadeAndAnimatios';
import { ThemeContext } from '../context/themeContext/ThemeContext';



const { width: screenWidth } = Dimensions.get('window')

interface Props extends StackScreenProps<any, any> { }

interface Slide {
    title: string;
    desc: string;
    img: ImageSourcePropType
}

const items: Slide[] = [
    {
        title: 'Titulo 1',
        desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
        img: require('../assets/slide-1.png')
    },
    {
        title: 'Titulo 2',
        desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
        img: require('../assets/slide-2.png')
    },
    {
        title: 'Titulo 3',
        desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
        img: require('../assets/slide-3.png')
    },
]


const renderItem = (item: Slide) => {



    return (
        <View
            style={{
                flex: 1,
                backgroundColor: 'white',
                borderRadius: 5,
                paddingTop: 40,
                justifyContent: 'center',
                paddingHorizontal: 20
            }}
        >
            <Image
                source={item.img}
                style={{
                    width: 260,
                    height: 260,
                    resizeMode: 'center'
                }}
            />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subTitle}>{item.desc}</Text>
        </View>
    )
}


export const SlideScreen = ({ navigation }: Props) => {

    const [activeIndex, setActiveIndex] = useState(0)
    const isVisible = useRef(false)
    const {theme:{colors}} = useContext(ThemeContext)

    const { opacity, fadeIn } = useFadeAndAnimatios()


    return (
        <SafeAreaView
            style={{
                flex: 1,
                paddingTop: 50
            }}
        >
            <Carousel

                data={items}
                renderItem={({ item }: any) => renderItem(item)}
                sliderWidth={screenWidth}
                itemWidth={screenWidth}
                layout='default'
                onSnapToItem={(index) => {
                    setActiveIndex(index)

                    if (index === 2) {
                        isVisible.current = true
                        fadeIn()
                    }

                }}

            />

            <View style={styles.feedContainer}>

                <Pagination
                    dotsLength={items.length}
                    activeDotIndex={activeIndex}
                    dotStyle={{
                        width: 10,
                        height: 10,
                        borderRadius: 5,
                        backgroundColor: colors.primary
                    }}
                />


                <Animated.View style={{ opacity }}>
                    <TouchableOpacity
                        style={styles.btnEntrar}
                        onPress={() => navigation.navigate('HomeScreen')}
                    >
                        <Text style={styles.textEntrar}>Entrar</Text>
                        <Icon name="chevron-forward-outline" size={25} color="white" />
                    </TouchableOpacity>
                </Animated.View>

            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: "#5856D6"
    },
    subTitle: {
        fontSize: 15
    },
    feedContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20
    },
    btnEntrar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#5856D6',
        borderRadius: 10,
        height: 40,
        width: 90,
    },
    textEntrar: {
        fontSize: 15,
        color: 'white'
    }
});
