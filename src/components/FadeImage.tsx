
import React, { useState } from 'react'
import { View, Animated, ActivityIndicator, StyleProp, ImageStyle } from 'react-native';
import { useFadeAndAnimatios } from '../hooks/useFadeAndAnimatios';


interface Props {
    uri: string;
    style?: StyleProp<ImageStyle>
}

export const FadeImage = ({ uri, style }: Props) => {

    const { opacity, fadeIn } = useFadeAndAnimatios()
    const [isLoading, setIsLoading] = useState(true)

    const finishLoading = () => {
        setIsLoading(false)
        fadeIn()
    }

    return (
        <View>

            {
                isLoading &&
                <ActivityIndicator
                    size={25}
                    style={{ position: 'absolute' }}
                    color="#5856D6"
                />
            }
            <Animated.Image
                source={{ uri }}
                onLoadEnd={finishLoading}
                style={{
                    ...style as any,
                    opacity
                }}

            />

        </View>
    )
}
