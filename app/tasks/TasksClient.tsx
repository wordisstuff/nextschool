'use client';
import { deleteTask, getTasks, Task } from '@/lib/tasksApi';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

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
                    <h2>{i.title}</h2>
                    <p>{i.description}</p>
                    <button onClick={() => delTask(i.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
}
