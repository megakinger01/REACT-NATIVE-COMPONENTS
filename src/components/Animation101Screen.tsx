import React from 'react'
import { Animated, Button,  StyleSheet, View } from 'react-native'
import { useFadeAndAnimatios } from '../hooks/useFadeAndAnimatios'

export const Animation101Screen = () => {

    const {fadeIn , fadeOut , position, opacity, startMovingPosicion } =useFadeAndAnimatios()


    return (
        <View style={styles.container}>

            <Animated.View style={{
                ...styles.boxPurple,
                opacity,
                transform: [{
                    translateY: position
                }]
            }} />

            <Button
                title="Fade In"
                onPress={()=> {
                    fadeIn()
                    startMovingPosicion(-100)
                }}
            />
            <Button
                title="Fade Out"
                onPress={fadeOut}
            />

        </View>
    )
}

const styles = StyleSheet.create({


    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    boxPurple: {
        width: 150,
        height: 150,
        backgroundColor: '#5856D6'
    }
});