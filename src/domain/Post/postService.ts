import {postApi} from './postApi';
import {Post} from './postTypes';
import {postAdapter} from './postAdapter';

async function getList(page: number): Promise<Post[]> {
  const postPageAPI = await postApi.getList({page, per_page: 10});
  return postPageAPI.data.map(postAdapter.toPost);
}

export const postService = {
  getList,
};
