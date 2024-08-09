import React from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {PostComment, usePostCommentList} from '@domain';

import {Box, Screen} from '@components';
import {AppScreeProps} from '@routes';

import {PostCommentItem} from './components/PostCommentItem';

export function PostCommentScreen({route}: AppScreeProps<'PostCommentScreen'>) {
  const postId = route.params.postId;
  const {list} = usePostCommentList(postId);

  function renderItem({item}: ListRenderItemInfo<PostComment>) {
    return (
      <Box>
        <PostCommentItem postComment={item} />
      </Box>
    );
  }

  return (
    <Screen title="Comentários" canGoBack>
      <FlatList data={list} renderItem={renderItem} />
    </Screen>
  );
}
