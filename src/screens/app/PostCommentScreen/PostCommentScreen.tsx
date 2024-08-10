import React from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {PostComment, usePostCommentList, useUser} from '@domain';

import {Box, Screen} from '@components';
import {useAppSafeArea} from '@hooks';
import {AppScreeProps} from '@routes';

import {
  PostCommentBottom,
  PostCommentItem,
  PostCommentTextMessage,
} from './components';

export function PostCommentScreen({route}: AppScreeProps<'PostCommentScreen'>) {
  const postId = route.params.postId;
  const postAuthorId = route.params.postAuthorId;
  const {list, fetchNextPage, hasNextPage, refresh} =
    usePostCommentList(postId);
  const {id} = useUser();

  const {bottom} = useAppSafeArea();

  function renderItem({item}: ListRenderItemInfo<PostComment>) {
    return (
      <Box>
        <PostCommentItem
          postComment={item}
          onRemoveComment={refresh}
          userId={id}
          postAuthorId={postAuthorId}
        />
      </Box>
    );
  }

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
        <PostCommentTextMessage postId={postId} onAddComment={refresh} />
      </Box>
    </Screen>
  );
}
