import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  LoginScreen,
  SignUpScreen,
  SuccessScreen,
  ForgotPasswordScreen,
} from '@screens';
import { IconProps } from '@components';

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
