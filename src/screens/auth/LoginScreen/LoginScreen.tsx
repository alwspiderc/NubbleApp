import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Text } from '../../../components/Text/Text';
import { TextInput } from '../../../components/TextInput/TextInput';
import { Button } from '../../../components/Button/Button';
import { Icon } from '../../../components/Icon/Icon';

export function LoginScreen() {
  return (
    <SafeAreaView>
      <View style={{ paddingHorizontal: 24 }}>
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
        <TextInput
          label="Senha"
          placeholder="Digite sua senha"
          rightComponent={<Icon name="eyeOn" />}
          boxProps={{ mb: 's10' }}
        />
        <Text color="primary" bold preset="paragraphSmall">
          Esqueci minha senha
        </Text>
        <Button mt="s48" title="Entrar" />
        <Button mt="s12" title="Criar uma conta" preset="outline" />
      </View>
    </SafeAreaView>
  );
}
