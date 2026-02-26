'use client';

import { getTask } from '@/lib/tasksApi';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';

export default function TaskClient() {
    const { id } = useParams<{ id: string }>();

    const { data } = useQuery({
        queryKey: ['task'],
        queryFn: () => getTask(id),
        refetchOnMount: false,
    });

    const postTask = () => {
        console.log('Post Task');
    };

    return (
        <div>
            <h1>{data?.title}</h1>
            <p>{data?.description}</p>
            <button onClick={() => postTask()}>Edit</button>
        </div>
    );
}
