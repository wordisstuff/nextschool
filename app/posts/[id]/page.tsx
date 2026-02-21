import { fetchPost } from '@/lib/postsApi';
import {
    dehydrate,
    HydrationBoundary,
    QueryClient,
} from '@tanstack/react-query';
import PostClient from './PostClient';

interface Props {
    params: Promise<{ id: string }>;
}
export default async function Post({ params }: Props) {
    const { id } = await params;
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: ['post'],
        queryFn: () => fetchPost(Number(id)),
    });
    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <PostClient />
        </HydrationBoundary>
    );
}
