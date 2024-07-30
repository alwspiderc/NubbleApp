import React, {useEffect, useState} from 'react';

import {Box, Screen, Text} from '@components';
import {AppTabScreenProps} from '@routes';
import {Post, postService} from '@domain';
import {Dimensions, FlatList, Image, ListRenderItemInfo} from 'react-native';

export function HomeScreen({}: AppTabScreenProps<'HomeScreen'>) {
  const [postList, setPostList] = useState<Post[]>([]);

  useEffect(() => {
    postService.getList().then(list => {
      setPostList(list);
    });
  }, []);

  function renderItem({item}: ListRenderItemInfo<Post>) {
    return (
      <Box mb="s24">
        <Box flexDirection="row">
          <Image
            source={{uri: item.author.profileURL}}
            style={{width: 32, height: 32}}
          />
          <Text>{item.author.name}</Text>
        </Box>
        <Image
          source={{uri: item.imageURL}}
          resizeMode="cover"
          style={{width: Dimensions.get('screen').width, height: 300}}
        />
      </Box>
    );
  }

  return (
    <Screen>
      <FlatList
        data={postList}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </Screen>
  );
}
