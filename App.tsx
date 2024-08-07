import React from 'react';

import {ThemeProvider} from '@shopify/restyle';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {theme} from '@theme';
import {Router} from './src/routes/Routes';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <Router />
        {/* <LoginScreen /> */}
        {/* <SignUpScreen /> */}
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
