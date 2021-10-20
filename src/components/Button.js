import React from 'react'
import { StyleSheet } from 'react-native'
import { Button as PaperButton } from 'react-native-paper'
import { fontSize } from '../constants/theme'
import useCustomTheme from '../util/hooks/useCustomTheme';

export default function Button({ mode, style, styleText, ...props }) {
  const { colors } = useCustomTheme();
  const styles = customStyles(colors);

  return (
    <PaperButton
      style={[
        styles.button,
        mode === 'outlined' && { backgroundColor: colors.surface },
        style,
      ]}
      
      labelStyle={[styles.text, styleText]}
      mode={mode}
      {...props}
    />
  )
}

const customStyles = colors => StyleSheet.create({
  button: {
    flex: 1,
    margin: 10,
    backgroundColor: colors.accent,
  },
  text: {
    color: colors.text,
    fontSize: fontSize.medium,
    fontWeight: 'bold',
  },
})
