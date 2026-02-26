'use client';

import { deleteTask, getTasks, Task } from '@/lib/tasksApi';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import Link from 'next/link';

export default function TasksClient() {
    const { data } = useQuery({
        queryKey: ['tasks'],
        queryFn: getTasks,
        refetchOnMount: false,
    });
    const queryClient = useQueryClient();

    const { mutate } = useMutation({
        mutationFn: deleteTask,
        onSuccess() {
            queryClient.invalidateQueries({ queryKey: ['tasks'] });
        },
    });

    const delTask = (id: Task['id']) => {
        mutate(id);
    };

    return (
        <ul>
            {data?.map(i => (
                <li key={i.id}>
                    <Link href={`/task-details/${i.id}`}>{i.title}</Link>
                    <p>{i.description}</p>
                    <button onClick={() => delTask(i.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
}
