import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Text } from './src/components/Text/Text';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from './src/theme/theme';
import { Button } from './src/components/Button/Button';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View>
          <Text preset="headingLarge" italic>
            Coffstack
          </Text>

          <Button title="primary" marginBottom="s12" marginTop="s16" />
          <Button disabled title="primary" marginBottom="s12" marginTop="s16" />

          <Button
            preset="outline"
            title="outline"
            marginBottom="s12"
            marginTop="s16"
          />

          <Button
            disabled
            preset="outline"
            title="outline"
            marginBottom="s12"
            marginTop="s16"
          />

          <Button title="primary" marginBottom="s12" marginTop="s16" loading />
          <Button
            disabled
            title="primary"
            marginBottom="s12"
            marginTop="s16"
            loading
          />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
