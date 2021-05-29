import { useRef } from "react"
import { Animated } from "react-native"


export const useFadeAndAnimatios = () => {


    const opacity = useRef(new Animated.Value(0)).current
    const position = useRef(new Animated.Value(0)).current

        /**HACER FADE IN */
        const fadeIn = () => {
            Animated.timing(
            opacity,                   /**Objeto del tipo Animated */
            {
                duration: 300,           /** configuracion del tiempo de la animacion */
                toValue: 1,              /** valor hacia el q apunta */
                useNativeDriver: true    /** propiedad par q corra mejor en el software */
            }

        ).start()  /**start parar que inicie */
        }


        /**HACER FADEOUT */
        const fadeOut = () => {
            Animated.timing(
                opacity,                   
                { duration: 300, toValue: 0, useNativeDriver: true }
            ).start()                       
        }

        /**INICIAR UNA TRANSICION DE MOVIMIENTO */
        const startMovingPosicion = ( initPosicion:number , duration:number = 300) => {

            position.setValue(initPosicion)  /** valor inicial de la transicion   */

            Animated.timing(
                position,
                { duration, toValue:0, useNativeDriver:true }

            ).start()
        }



    return {
        fadeIn,
        fadeOut,
        opacity,
        position,
        startMovingPosicion
    }
}
