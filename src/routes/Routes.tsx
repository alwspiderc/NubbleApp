import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from '../screens/auth/LoginScreen/LoginScreen';
import { SignUpScreen } from '../screens/auth/SignUpScreen/SignUpScreen';
import { SuccessScreen } from '../screens/auth/SuccessScreen/SuccessScreen';
import { IconProps } from '../components/Icon/Icon';
import { ForgotPasswordScreen } from '../screens/auth/ForgotPasswordScreen/ForgotPasswordScreen';

export type RootStackParamList = {
  LoginScreen: undefined,
  SignUpScreen: undefined,
  SuccessScreen: {
    title: string,
    description: string,
    icon: Pick<IconProps, 'name' | 'color'>,
  },
  ForgotPasswordScreen: undefined,
};

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

export function Router() {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="LoginScreen"
        screenOptions={{
          headerShown: false,
          fullScreenGestureEnabled: true,
        }}>
        <Screen name="LoginScreen" component={LoginScreen} />
        <Screen name="SignUpScreen" component={SignUpScreen} />
        <Screen name="SuccessScreen" component={SuccessScreen} />
        <Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
      </Navigator>
    </NavigationContainer>
  );
}
