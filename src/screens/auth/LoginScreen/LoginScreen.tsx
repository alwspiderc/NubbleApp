import React from 'react';
import { Text } from '../../../components/Text/Text';
import { Button } from '../../../components/Button/Button';
import { Screen } from '../../../components/Screen/Screen';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../routes/Routes';
import { useForm } from 'react-hook-form';
import { FormTextInput } from '../../../components/Form/FormTextInput';
import { FormPasswordInput } from '../../../components/Form/FormPasswordInput';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, LoginSchema } from './loginSchema';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;
export function LoginScreen({ navigation }: ScreenProps) {
  const { control, formState, handleSubmit } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  function submitForm({ email, password }: LoginSchema) {}

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

      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{ mb: 's20' }}
      />

      <FormPasswordInput
        control={control}
        name="password"
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

      <Button
        disabled={!formState.isValid}
        mt="s48"
        title="Entrar"
        onPress={handleSubmit(submitForm)}
      />

      <Button
        mt="s12"
        title="Criar uma conta"
        preset="outline"
        onPress={navigationToSignUpScreen}
      />
    </Screen>
  );
}
