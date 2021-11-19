import {
  TransitionSpecs,
  TransitionPresets,
  CardStyleInterpolators,
} from '@react-navigation/stack';

const openConfig = {
  ...TransitionSpecs.ScaleFromCenterAndroidSpec,
  config: {
    ...TransitionSpecs.ScaleFromCenterAndroidSpec.config,
    duration: 500,
  },
};

const customTransition = {
  gestureEnabled: true,
  gestureDirection: 'horizontal',
  transitionSpec: {
    open: openConfig,
    close: TransitionSpecs.ScaleFromCenterAndroidSpec,
  },
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};

export const NavigatorProps = {
  initialRouteName: 'Start',
  screenOptions: {
    headerShown: true,
    headerBackTitle: 'Voltar',
    headerTransparent: true,
  },
};
export const StartOptions = {
  ...customTransition,
  headerTitle: 'Store',
};

export const WalletOptions = {
  ...TransitionPresets.DefaultTransition,
  headerTitle: 'Wallet',
  headerBackTitle: 'Back',
};
