import React, { useContext } from 'react'
import { View } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { ThemeContext } from '../context/themeContext/ThemeContext';

import { AlertScreen } from '../screens/AlertScreen';
import { Animation101Screen } from '../screens/Animation101Screen';
import { Animation102Screen } from '../screens/Animation102Screen';
import { CustomSectionListScreen } from '../screens/CustomSectionListScreen';
import { InfinityScrollScreen } from '../screens/InfinityScrollScreen';
import { ModalScreen } from '../screens/ModalScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { PullTorefreshScreen } from '../screens/PullTorefreshScreen';
import { SwitchScreen } from '../screens/SwitchScreen';
import { SlideScreen } from '../screens/SlideScreen';
import { TextInputScreen } from '../screens/TextInputScreen';
import { ChangeThemeScreen } from '../screens/ChangeThemeScreen';

const Stack = createStackNavigator();


export const Navigator = () => {

  const { theme } = useContext(ThemeContext)
  return (

    <View style={{backgroundColor: theme.colors.background, flex:1}}>
      <NavigationContainer
        theme={theme}
      >
        <Stack.Navigator
          screenOptions={{
            headerShown: false,  /**Quita los headers a las pantallas */
            cardStyle: {
              // backgroundColor:'white'
            }
          }}

        >
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="Animation101Screen" component={Animation101Screen} />
          <Stack.Screen name="Animation102Screen" component={Animation102Screen} />
          <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
          <Stack.Screen name="AlertScreen" component={AlertScreen} />
          <Stack.Screen name="TextInputScreen" component={TextInputScreen} />
          <Stack.Screen name="PullTorefreshScreen" component={PullTorefreshScreen} />
          <Stack.Screen name="CustomSectionListScreen" component={CustomSectionListScreen} />
          <Stack.Screen name="ModalScreen" component={ModalScreen} />
          <Stack.Screen name="InfinityScrollScreen" component={InfinityScrollScreen} />
          <Stack.Screen name="SlideScreen" component={SlideScreen} />
          <Stack.Screen name="ChangeThemeScreen" component={ChangeThemeScreen} />

        </Stack.Navigator>
      </NavigationContainer>

    </View>

  );
}