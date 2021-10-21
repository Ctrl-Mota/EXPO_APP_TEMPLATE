import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native';
import { Start, Wallet } from '../screens';
import { NavigatorProps, StartOptions, WalletOptions } from './customOptions';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

TouchableOpacity.defaultProps = {
  ...(TouchableOpacity.defaultProps || {}),
  delayPressIn: 0,
};

export const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator {...NavigatorProps}>
        <Stack.Screen
          name="Start"
          component={Start}
          options={{ ...StartOptions }}
        />
        <Stack.Screen
          name="Wallet"
          component={Wallet}
          options={{ ...WalletOptions }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
