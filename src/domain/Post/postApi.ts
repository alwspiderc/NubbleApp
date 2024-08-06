import {PageAPI} from '@api';
import {PostAPI} from './postTypes';

async function getList(): Promise<PageAPI<PostAPI>> {
  let headersList = {
    Authorization:
      'Bearer Mg.33gTmspwpJDR5s_gMn54tpsWYuPkZ1PcEFdTSS8khvCqeE7DkFWyVJ8wBIwI',
  };

  let response = await fetch('http://localhost:3333/user/post', {
    method: 'GET',
    headers: headersList,
  });

  let data: PageAPI<PostAPI> = await response.json();
  return data;
}

export const postApi = {
  getList,
};
