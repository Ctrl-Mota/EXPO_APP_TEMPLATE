import React, { useContext, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  coinReducer,
  DispatchContext,
  initialState,
  StateContext,
  StoreContext,
} from '../util/context/reducer';
import { pwi, fontSize } from '../constants/theme';
import Button from '../components/Button';
import { decrease, increase } from '../util/context/actions';
import { IconButton, useTheme } from 'react-native-paper';
import CText from '../components/CText';

const Start = ({ navigation }) => {
  const { colors } = useTheme();
  const styles = customStyles(colors);
  const dispatch = useContext(DispatchContext);
  const state = useContext(StateContext);

  useEffect(() => {
    navigation.setOptions({
      headerTintColor: colors.primary,
      headerRight: () => (
        <IconButton
          icon="wallet"
          color={colors.primary}
          size={25}
          onPress={() => navigation.navigate('Wallet')}
        />
      ),
    });
  }, [navigation]);
  return (
    <View style={styles.container}>
      <CText style={{ fontSize: fontSize.medium, color: colors.text }}>
        How many coins do you want to put in your digital wallet?
      </CText>
      <View style={styles.viewButtons}>
        <Button onPress={() => dispatch(decrease(1))}>-</Button>
        <View style={styles.boxCoin}>
          <CText style={{ fontSize: fontSize.small }}>{state.coin}</CText>
        </View>
        <Button onPress={() => dispatch(increase(1))}>+</Button>
      </View>
    </View>
  );
};

export default Start;

const customStyles = colors =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
    viewButtons: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: pwi(2),
    },
    boxCoin: {
      width: pwi(10),
      height: pwi(10),
      backgroundColor: colors.surface,
      borderWidth: 3,
      borderColor: colors.accent,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
