import React, { useReducer } from 'react';
import { Provider as ProviderPaper } from 'react-native-paper'
import { Main } from './src/navigation/Main';
import useCustomTheme from './src/util/hooks/useCustomTheme';
import useCachedResources from './src/util/hooks/useCachedResources';
import { coinReducer, DispatchContext, initialState, StateContext } from './src/util/context/reducer';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

export default function App() {
    const isLoadingComplete = useCachedResources();
    const [state, dispatch] = useReducer(coinReducer, initialState);
    const theme = useCustomTheme();
    
    if (!isLoadingComplete) {
        return null;
    } else {
        return (
            <SafeAreaProvider>
            <StatusBar 
                barStyle={theme.dark ? 'light-content' : 'dark-content'}/>
            <DispatchContext.Provider value={dispatch}>
                <StateContext.Provider value={state}>
                    <ProviderPaper theme={theme}>
                        <Main />
                    </ProviderPaper>
                </StateContext.Provider>
            </DispatchContext.Provider>
            </SafeAreaProvider>
        );
    }
}
