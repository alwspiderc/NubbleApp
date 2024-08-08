import {postApi} from './postApi';
import {Post} from './postTypes';
import {postAdapter} from './postAdapter';
import {Page} from '@types';
import {apiAdapter} from '@api';

async function getList(page: number): Promise<Page<Post>> {
  const postPageAPI = await postApi.getList({page, per_page: 5});

  return {
    data: postPageAPI.data.map(postAdapter.toPost),
    meta: apiAdapter.toMetaDataPage(postPageAPI.meta),
  };
}

export const postService = {
  getList,
};
