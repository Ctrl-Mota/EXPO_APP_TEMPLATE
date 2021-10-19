import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import colors from '../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingVertical: 20,
  },
});


const Start = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Olá mundo!</Text>
    </View>
  );
};

export default Start;