import React, {useState} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {PostComment, usePostCommentList} from '@domain';

import {Box, Screen, TextMessage} from '@components';
import {useAppSafeArea} from '@hooks';
import {AppScreeProps} from '@routes';

import {PostCommentBottom, PostCommentItem} from './components';

export function PostCommentScreen({route}: AppScreeProps<'PostCommentScreen'>) {
  const postId = route.params.postId;
  const {list, fetchNextPage, hasNextPage} = usePostCommentList(postId);
  const [message, setMessage] = useState('');

  const {bottom} = useAppSafeArea();

  function renderItem({item}: ListRenderItemInfo<PostComment>) {
    return (
      <Box>
        <PostCommentItem postComment={item} />
      </Box>
    );
  }

  function onPressSend() {}

  return (
    <Screen flex={1} title="Comentários" canGoBack>
      <Box flex={1} justifyContent="space-between">
        <FlatList
          showsVerticalScrollIndicator={false}
          data={list}
          renderItem={renderItem}
          contentContainerStyle={{paddingBottom: bottom}}
          ListFooterComponent={
            <PostCommentBottom
              hasNextPage={hasNextPage}
              fetchNextPage={fetchNextPage}
            />
          }
        />
        <TextMessage
          placeholder="Adicione um comentário"
          onPressSend={onPressSend}
          value={message}
          onChangeText={setMessage}
        />
      </Box>
    </Screen>
  );
}
