import React, { useState } from 'react'
import { Button, Modal, Text, View } from 'react-native';
import { HeaderItem } from '../components/HeaderItem';

export const ModalScreen = () => {

    const [isVisible, setIsVisible] = useState(false)
    return (
        <View>
            <HeaderItem title="modal Screen" />

            <Modal
                animationType='fade'
                visible={isVisible}
                transparent={true}

            >
                {/* /**FONDO GRIS */}
                <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.3)', justifyContent: "center", alignItems: "center" }}>

                    <View style={{ backgroundColor: 'white', justifyContent: "center", alignItems: "center", width: 200, height: 100 }}>
                        <Text>Modal</Text>
                        <Text style={{ fontSize: 20, fontWeight: '700', marginBottom: 10 }}> Cuerpo del modal</Text>
                        <Button title="cerrar Modal" onPress={() => setIsVisible(false)} />
                    </View>
                </View>

            </Modal>

            <Button
                title="abrir modal"
                onPress={() => setIsVisible(true)}
            />
        </View>
    )
}
