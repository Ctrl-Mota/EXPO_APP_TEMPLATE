import React from 'react';
import { createStackNavigator, TransitionSpecs, CardStyleInterpolators } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native';
import { Start } from '../screens';

export const Main = () => (
  <Stack.Navigator>
    <Stack.Screen name="Start" component={Start} options={{ ...customTransition }}/>
  </Stack.Navigator>
);

TouchableOpacity.defaultProps = { ...(TouchableOpacity.defaultProps || {}), delayPressIn: 0 };

const Stack = createStackNavigator();

const openConfig = {
  ...TransitionSpecs.ScaleFromCenterAndroidSpec,
  config: {
    ...TransitionSpecs.ScaleFromCenterAndroidSpec.config,
    duration: 500
  }
};

const customTransition = {
  gestureEnabled: true,
  gestureDirection: 'horizontal',
  transitionSpec: {
    open: openConfig,
    close: TransitionSpecs.ScaleFromCenterAndroidSpec,
  },
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
};
