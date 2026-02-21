import { fetchPosts } from '@/lib/postsApi';
import {
    dehydrate,
    HydrationBoundary,
    QueryClient,
} from '@tanstack/react-query';
import PostsClient from './PostsClient';

export default async function Posts() {
    const queryClient = new QueryClient();
    await queryClient.prefetchQuery({
        queryKey: ['posts'],
        queryFn: fetchPosts,
    });
    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <PostsClient />
        </HydrationBoundary>
    );
}
