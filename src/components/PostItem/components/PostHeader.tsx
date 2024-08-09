import React from 'react';
import {Image} from 'react-native';

import {Post} from '@domain';

import {Box} from '../../Box/Box';
import {Text} from '../../Text/Text';

type Props = Pick<Post, 'author'>;

export function PostHeader({author}: Props) {
  return (
    <Box mb="s16" flexDirection="row" alignItems="center">
      <Image
        source={{uri: author.profileURL}}
        style={{width: 32, height: 32, borderRadius: 14}}
      />
      <Text ml="s12" semiBold preset="paragraphMedium">
        {author.name}
      </Text>
    </Box>
  );
}
