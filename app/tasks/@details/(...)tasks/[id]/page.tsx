import { getTask } from '@/lib/tasksApi';

interface Props {
    params: Promise<{ id: string }>;
}

export default async function Details({ params }: Props) {
    const id = await params;
    console.log(id);
    // const task = await getTask(id);
    return (
        <div>
            Task
            {/* <h2>{task.title}</h2>
            <p>{task.description}</p> */}
        </div>
    );
}
