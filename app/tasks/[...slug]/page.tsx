import { getTask } from '@/lib/tasksApi';

interface Props {
    params: Promise<{ id: string }>;
}
export default async function Task({ params }: Props) {
    const { id } = await params;
    const task = await getTask(id);
    return (
        <div>
            <h1>{task.title}</h1>
            <p>description: {task.description}</p>
        </div>
    );
}
