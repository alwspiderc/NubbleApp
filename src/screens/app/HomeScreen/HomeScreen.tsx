import {Button, Screen, Text} from '@components';
import {AppScreeProps} from '@routes';
import React from 'react';

export function HomeScreen({navigation}: AppScreeProps<'HomeScreen'>) {
  return (
    <Screen>
      <Text preset="headingLarge">Home Screen</Text>
      <Button
        title="Settings"
        onPress={() => navigation.navigate('SettingsScreen')}
      />
    </Screen>
  );
}
