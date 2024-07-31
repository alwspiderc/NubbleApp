import React from 'react';
import {Box} from '../Box/Box';
import {Post} from '@domain';
import {PostHeader} from './components/PostHeader';
import {PostImage} from './components/PostImage';
import {PostActions} from './components/PostActions';
import {PostBottom} from './components/PostBottom';

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
      />
    </Box>
  );
}
