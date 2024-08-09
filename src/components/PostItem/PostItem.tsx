import React from 'react';

import {Post} from '@domain';

import {Box} from '../Box/Box';

import {PostActions} from './components/PostActions';
import {PostBottom} from './components/PostBottom';
import {PostHeader} from './components/PostHeader';
import {PostImage} from './components/PostImage';

interface Props {
  post: Post;
}

export function PostItem({post}: Props) {
  return (
    <Box pl="s24" mb="s24">
      <PostHeader author={post.author} />
      <PostImage imageURL={post.imageURL} />
      <PostActions
        reactionCount={post.reactionCount}
        favoriteCount={post.favoriteCount}
        commentCount={post.commentCount}
      />
      <PostBottom
        author={post.author}
        text={post.text}
        commentCount={post.commentCount}
        id={post.id}
      />
    </Box>
  );
}
