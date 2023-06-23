import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Text } from './src/components/Text/Text';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from './src/theme/theme';
import { Button } from './src/components/Button/Button';
import { Icon } from './src/components/Icon/Icon';
import { Box } from './src/components/Box/Box';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View>
          <Text preset="headingLarge" italic>
            Coffstack
          </Text>
          <Box flexDirection="row">
            <Icon name="chevronRight" color="successLight" size={50} />
            <Icon name="heartFill" color="buttonPrimary" />
            <Icon name="profile" size={50} />
            <Icon name="profileFill" size={50} />
            <Icon name="heart" size={50} />
            <Icon name="bellOn" color="carrotSecondary" size={50} />
          </Box>
          <Box flexDirection="row">
            <Icon name="newPost" size={50} />
            <Icon name="camera" size={50} />
            <Icon name="chat" size={50} />
            <Icon name="chatOn" color="error" size={50} />
            <Icon name="flashOff" size={50} />
            <Icon name="flashOn" size={50} />
          </Box>

          {/* <Button title="primary" marginBottom="s12" marginTop="s16" />
          <Button disabled title="primary" marginBottom="s12" marginTop="s16" /> */}

          {/* <Button
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
          /> */}
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
