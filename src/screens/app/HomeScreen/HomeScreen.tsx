import React from 'react';
import {FlatList, ListRenderItemInfo, StyleProp, ViewStyle} from 'react-native';

import {PostItem, Screen} from '@components';
import {AppTabScreenProps} from '@routes';
import {Post, usePostList} from '@domain';

import {HomeHeader} from './components/HomeHeader';
import {HomeEmpty} from './components/HomeEmpty';

export function HomeScreen({}: AppTabScreenProps<'HomeScreen'>) {
  const {postList, error, loading, refetch} = usePostList();
  function renderItem({item}: ListRenderItemInfo<Post>) {
    return <PostItem post={item} />;
  }

  return (
    <Screen style={$screen}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={postList}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={{flex: postList.length === 0 ? 1 : 0}}
        ListHeaderComponent={<HomeHeader />}
        ListEmptyComponent={
          <HomeEmpty refetch={refetch} error={error} loading={loading} />
        }
      />
    </Screen>
  );
}

const $screen: StyleProp<ViewStyle> = {
  paddingTop: 0,
  paddingBottom: 0,
  paddingHorizontal: 0,
  flex: 1,
};
