import React, { useState } from 'react'
import { Switch } from 'react-native'



interface Props {

    isON: boolean;
    onChange: (value: boolean) => void
}

export const CustomSwitch = ({ isON, onChange }: Props) => {

    const [isEnabled, setIsEnabled] = useState(isON);

    const toggleSwitch = () => {
        setIsEnabled(!isEnabled);
        onChange(!isEnabled)
    }

    return (
        <Switch
            trackColor={{ false: "#767577", true: "#5856D6" }}
            thumbColor={isEnabled ? "#F5F5F5" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
        />
    )
}
