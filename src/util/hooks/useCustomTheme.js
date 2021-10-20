import { useColorScheme } from 'react-native';
import { DarkTheme, DefaultTheme } from 'react-native-paper';

export default function useCustomTheme(){
  const isDark = useColorScheme();
  console.log(isDark)
  const theme = isDark !== "dark" ? {...DefaultTheme} : {...DarkTheme};
  return theme;
}
