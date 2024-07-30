import React from 'react';
import {Box} from '../Box/Box';
import {Post} from '@domain';
import {PostHeader} from './components/PostHeader';
import {PostImage} from './components/PostImage';
import {PostActions} from './components/PostActions';

interface Props {
  post: Post;
}

export function PostItem({post}: Props) {
  return (
    <Box mb="s24">
      <PostHeader author={post.author} />
      <PostImage imageURL={post.imageURL} />
      <PostActions
        reactionCount={post.reactionCount}
        favoriteCount={post.favoriteCount}
        commentCount={post.commentCount}
      />
    </Box>
  );
}
