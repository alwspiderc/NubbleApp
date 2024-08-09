import React from 'react';

import {Post} from '@domain';

import {Box, Text, ProfileAvatar} from '@components';

type Props = Pick<Post, 'author'>;

export function PostHeader({author}: Props) {
  return (
    <Box mb="s16" flexDirection="row" alignItems="center">
      <ProfileAvatar imageURL={author.profileURL} />
      <Text ml="s12" semiBold preset="paragraphMedium">
        {author.name}
      </Text>
    </Box>
  );
}
