import { fetchPost } from '@/lib/postsApi';
import {
    dehydrate,
    HydrationBoundary,
    QueryClient,
} from '@tanstack/react-query';
import TaskClient from './TaskClient';

interface Props {
    params: Promise<{ id: string }>;
}
export default async function Task({ params }: Props) {
    const { id } = await params;
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: ['post'],
        queryFn: () => fetchPost(Number(id)),
    });
    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <TaskClient />
        </HydrationBoundary>
    );
}
