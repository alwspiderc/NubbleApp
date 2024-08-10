import React, {useState} from 'react';
import {Keyboard} from 'react-native';

import {usePostCommentCrete} from '@domain';

import {TextMessage} from '@components';

interface Props {
  postId: number;
}
export function PostCommentTextMessage({postId}: Props) {
  const {createComment} = usePostCommentCrete(postId);
  const [message, setMessage] = useState('');

  async function onPressSend() {
    await createComment(message);
    setMessage('');
    Keyboard.dismiss();
  }
  return (
    <TextMessage
      placeholder="Adicione um comentário"
      onPressSend={onPressSend}
      value={message}
      onChangeText={setMessage}
    />
  );
}
