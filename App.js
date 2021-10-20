import React, { useReducer } from 'react';
import { Provider as ProviderPaper } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native';
import { Main } from './src/navigation/Main';
import useCustomTheme from './src/util/hooks/useCustomTheme';
import useCachedResources from './src/util/hooks/useCachedResources';
import { coinReducer, DispatchContext, initialState, StateContext } from './src/util/context/reducer';

export default function App() {
    const isLoadingComplete = useCachedResources();
    const [state, dispatch] = useReducer(coinReducer, initialState);
    const theme = useCustomTheme();
    if (!isLoadingComplete) {
        return null;
    } else {
        return (
            <DispatchContext.Provider value={dispatch}>
                <StateContext.Provider value={state}>
                    <ProviderPaper theme={theme}>
                        <NavigationContainer>
                            <Main />
                        </NavigationContainer>
                    </ProviderPaper>
                </StateContext.Provider>
            </DispatchContext.Provider>
        );
    }
}
