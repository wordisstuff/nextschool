import axios from 'axios';
import { Posts } from './types';

interface PostsResponse {
    posts: Posts[];
}
export const fetchPosts = async (): Promise<Posts[]> => {
    const { data } = await axios.get<PostsResponse>(
        'https://dummyjson.com/posts',
    );
    return data.posts;
};

export const fetchPost = async (id: Posts['id']) => {
    const { data } = await axios.get<Posts>(
        `https://dummyjson.com/posts/${id}`,
    );
    return data;
};
