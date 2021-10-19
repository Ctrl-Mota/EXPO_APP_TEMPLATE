import React from 'react';
import { Provider as ProviderPaper } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native';
import { Main } from './navigation/Main';
import {theme} from './constants/theme';

export default function App() {
  return (
    <ProviderPaper theme={theme}>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </ProviderPaper>
  );
}
