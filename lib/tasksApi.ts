import axios from 'axios';

export interface Task {
    id: string;
    title: string;
    description: string;
}

interface TaskData {
    title: string;
    description: string;
}

export const getTasks = async () => {
    const { data } = await axios.get<Task[]>(
        'https://67a4109531d0d3a6b7854249.mockapi.io/tasks',
    );
    return data;
};

export const getTask = async (id: Task['id']) => {
    const { data } = await axios.get<Task>(
        `https://67a4109531d0d3a6b7854249.mockapi.io/tasks/${id}`,
    );
    return data;
};

export const postTask = async (taskData: TaskData) => {
    const { data } = await axios.post<Task>(
        'https://67a4109531d0d3a6b7854249.mockapi.io/tasks',
        taskData,
    );
    return data;
};

export const deleteTask = async (id: Task['id']) => {
    const { data } = await axios.delete<Task>(
        `https://67a4109531d0d3a6b7854249.mockapi.io/tasks/${id}`,
    );
    return data;
};
