import React from 'react';
import { Text } from '../../../components/Text/Text';
import { TextInput } from '../../../components/TextInput/TextInput';
import { Button } from '../../../components/Button/Button';
import { Screen } from '../../../components/Screen/Screen';
import { PasswordInput } from '../../../components/PasswordInput/PasswordInput';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../routes/Routes';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;

export function LoginScreen({ navigation }: ScreenProps) {
  function navigationToSignUpScreen() {
    navigation.navigate('SignUpScreen');
  }
  function navigationToForgotPasswordScreen() {
    navigation.navigate('ForgotPasswordScreen');
  }
  return (
    <Screen scrollable>
      <Text mb="s8" preset="headingLarge">
        Olá!
      </Text>
      <Text preset="paragraphLarge" mb="s40">
        Digite seu e-mail e senha para entrar
      </Text>

      <TextInput
        errorMessage="Mensagem de erro"
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{ mb: 's20' }}
      />
      <PasswordInput
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{ mb: 's10' }}
      />

      <Text
        onPress={navigationToForgotPasswordScreen}
        color="primary"
        bold
        preset="paragraphSmall">
        Esqueci minha senha
      </Text>
      <Button mt="s48" title="Entrar" />
      <Button
        mt="s12"
        title="Criar uma conta"
        preset="outline"
        onPress={navigationToSignUpScreen}
      />
    </Screen>
  );
}
