import {postApi} from './postApi';
import {Post} from './postTypes';
import {postAdapter} from './postAdapter';

async function getList(): Promise<Post[]> {
  const postPageAPI = await postApi.getList();
  return postPageAPI.data.map(postAdapter.toPost);
}

export const postService = {
  getList,
};
