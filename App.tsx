import React from 'react';

// import {ToastProvider} from '@services';
import {ThemeProvider} from '@shopify/restyle';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Toast} from '@components';
import {Router} from '@routes';
import {theme} from '@theme';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        {/* <ToastProvider> */}
        <Router />
        <Toast />
        {/* </ToastProvider> */}
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
