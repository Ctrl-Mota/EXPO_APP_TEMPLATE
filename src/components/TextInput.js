import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { TextInput as Input } from 'react-native-paper'
import { theme } from '../core/theme'

const TextInput = React.forwardRef((props, ref) => {
  const {errorText, description} = props

  return (
    <View style={styles.container}>
      <Input
        style={styles.input}
        selectionColor={theme.colors.primary}
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

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 25,
  },
  input: {
    backgroundColor: theme.colors.surface,
    color: 'black',
    height: 60
    
  },
  description: {
    fontSize: 13,
    color: theme.colors.primary,
    paddingTop: 8,
  },
  error: {
    fontSize: 13,
    color: theme.colors.error,
    paddingTop: 8,
  },
})
