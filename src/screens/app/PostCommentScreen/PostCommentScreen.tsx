import React from 'react';
import {Screen, Text} from '@components';
import {AppScreeProps} from '@routes';

export function PostCommentScreen({route}: AppScreeProps<'PostCommentScreen'>) {
  route.params.postId;
  return (
    <Screen title="Comentários" canGoBack>
      <Text preset="headingSmall">Settings Screen</Text>
    </Screen>
  );
}
