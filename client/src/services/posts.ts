import axios from 'axios';
import { Post } from '../models/Post';
const url = import.meta.env.VITE_API_URL;

export async function getAllPosts() {
  try {
    const { data, status } = await axios.get(`${url}/posts`);
    if (status !== 200) return [];

    return data.posts as Post[];
  } catch (error) {
    return [];
  }
}

export async function getPostById(id: string | number) {
  id = id.toString();
  try {
    const { data, status } = await axios.get(`${url}/post/${id}`);
    if (status !== 200) return null;

    if (data.post === undefined) return null;

    return data.post as Post;
  } catch (error) {
    return null;
  }
}

export async function getPostsByIds(ids: string[]) {
  let query = '';
  ids.forEach((id, i) => {
    if (i + 1 === ids.length) query += id;
    else query += `${id}&`;
  });

  try {
    const { data, status } = await axios.get(`${url}/postsByIds/${query}`);
    if (status !== 200) return [];

    return data.posts as Post[];
  } catch (error) {
    return [];
  }
}
