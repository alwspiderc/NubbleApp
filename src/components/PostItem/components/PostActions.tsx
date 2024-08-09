import React from 'react';

import {Post} from '@domain';

import {Box, TouchableOpacityBox, Text, Icon, IconProps} from '@components';

type Props = Pick<Post, 'reactionCount' | 'commentCount' | 'favoriteCount'>;
export function PostActions({
  reactionCount,
  commentCount,
  favoriteCount,
}: Props) {
  function likePost() {
    // TODO: implement like post ...
  }
  function navigateToComments() {
    // TODO: implement navigate to comments
  }
  function favoritePost() {
    // TODO: implement favorite post
  }
  return (
    <Box flexDirection="row" mt="s16">
      <Item
        marked
        onPress={likePost}
        text={reactionCount}
        icon={{default: 'heart', marked: 'heartFill'}}
      />
      <Item
        marked={false}
        onPress={navigateToComments}
        text={commentCount}
        icon={{default: 'comment', marked: 'comment'}}
      />
      <Item
        marked={false}
        onPress={favoritePost}
        text={favoriteCount}
        icon={{default: 'bookmark', marked: 'bookmarkFill'}}
      />
    </Box>
  );
}

interface itemProps {
  marked: boolean;
  onPress: () => void;
  text: number;
  icon: {
    default: IconProps['name'];
    marked: IconProps['name'];
  };
}

function Item({marked, text, onPress, icon}: itemProps) {
  return (
    <TouchableOpacityBox
      flexDirection="row"
      alignItems="center"
      mr="s24"
      onPress={onPress}>
      <Icon
        color={marked ? 'market' : undefined}
        name={marked ? icon.marked : icon.default}
      />
      {text > 0 && (
        <Text preset="paragraphSmall" bold ml="s4">
          {text}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
