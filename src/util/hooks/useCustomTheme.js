import { useColorScheme } from 'react-native';
import { _DarkTheme, _DefaultTheme } from '../../constants/theme';

export default function useCustomTheme() {
  const isDark = useColorScheme();
  const theme = isDark !== 'dark' ? { ..._DefaultTheme } : { ..._DarkTheme };
  return theme;
}
