import React, { useState } from 'react'
import { View, TextInput, StyleSheet, KeyboardAvoidingView, ScrollView, Platform, TouchableWithoutFeedback, Keyboard, Text } from 'react-native'
import { useForm } from '../hooks/useForm'
import { styles } from '../theme/appTheme'
import { HeaderItem } from '../components/HeaderItem'
import { CustomSwitch } from '../components/CustomSwitch';

export const TextInputScreen = () => {

    const { onChange, form, isSubscribed } = useForm({
        name: '',
        email: '',
        phone: '',
        isSubscribed: false
    })


    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >

            <ScrollView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.globalMargin}>
                        <HeaderItem title="text input" />


                        <TextInput
                            style={stylesInput.inputStyle}
                            placeholder="name"
                            onChangeText={(value) => onChange(value, 'name')}
                            autoCorrect={false}
                            autoCapitalize='words'
                        />

                        <TextInput
                            style={stylesInput.inputStyle}
                            placeholder="email"
                            onChangeText={(value) => onChange(value, 'email')}
                            keyboardType='email-address'
                            autoCapitalize='none'

                        />


                        <View style={stylesInput.switchRow}>
                            <Text style={stylesInput.switchText}>Is active</Text>
                            <CustomSwitch isON={isSubscribed} onChange={(value) => onChange(value, 'isSubscribed')} />
                        </View>


                        <HeaderItem title={JSON.stringify(form, null, 3)} />

                        <TextInput
                            style={stylesInput.inputStyle}
                            placeholder="phone"
                            onChangeText={(value) => onChange(value, 'phone')}
                            keyboardType='phone-pad'
                        />

                        <View style={{ height: 100 }} />


                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const stylesInput = StyleSheet.create({
    inputStyle: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'rgba(0,0,0,0.3)',
        height: 50,
        paddingHorizontal: 10,
        marginVertical: 10
    },
    switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    switchText: {
        fontSize: 25
    }
});
