import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { TextInput as Input } from 'react-native-paper'
import { theme } from '../constants/theme'
import useCustomTheme from '../util/hooks/useCustomTheme'

const TextInput = React.forwardRef((props, ref) => {
  const {errorText, description} = props;
  const { colors } = useCustomTheme();
  const styles = customStyles(colors);

  return (
    <View style={styles.container}>
      <Input
        style={styles.input}
        selectionColor={colors.surface}
        mode="flat"
        {...props}
      />
      {description && !errorText ? (
        <Text style={styles.description}>{description}</Text>
      ) : null}
      {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
    </View>
  )
})
export default TextInput

const customStyles = colors => StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 25,
  },
  input: {
    backgroundColor: colors.surface,
    color: 'black',
    height: 60
  },
  description: {
    fontSize: 13,
    color: colors.text,
    paddingTop: 8,
  },
  error: {
    fontSize: 13,
    color: colors.error,
    paddingTop: 8,
  },
})
