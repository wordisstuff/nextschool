import { getTasks } from '@/lib/tasksApi';
import {
    dehydrate,
    HydrationBoundary,
    QueryClient,
} from '@tanstack/react-query';
import TasksClient from './TasksClient';

export default async function Tasks() {
    const queryClient = new QueryClient();
    await queryClient.prefetchQuery({
        queryKey: ['tasks'],
        queryFn: getTasks,
    });
    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <TasksClient />
        </HydrationBoundary>
    );
}
