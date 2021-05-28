import React, { useRef } from "react";
import { Animated, PanResponder, StyleSheet, View } from "react-native";


export const Animation102Screen = () => {


    const pan = useRef(new Animated.ValueXY()).current;

    const panResponder = PanResponder.create({

        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event(
            [
                null,

                { dx: pan.x, dy: pan.y, }, /**MOVIMIENTO EN LA COORDENADA X , Y */
            ],

            { useNativeDriver: false }

        ),

        // MOVIMIENTO QUE SE GENERA AL SOLTAR LA CAJA
        onPanResponderRelease: () => {
            Animated.spring(

                pan, // Auto-multiplexed
                { toValue: { x: 0, y: 0 }, useNativeDriver: false } // Back to zero
            ).start();
        },
    });




    return (
        <View style={styles.container}>
            <Animated.View
                {...panResponder.panHandlers}
                style={[pan.getLayout(), styles.boxRed]}
            />
        </View>
    );
};


const styles = StyleSheet.create({


    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    boxRed: {
        width: 150,
        height: 150,
        backgroundColor: 'red',
        borderRadius: 10
    }
});