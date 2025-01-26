import { create, StateCreator } from 'zustand';
import { Task, TaskStatus } from '../../interfaces';
//import { logger } from '../middlewares';

interface TaskState {
    tasks: Record<string, Task>;
}


interface TaskActions {

    getTaskByStatus: (status: Task['status']) => Task[];
}

type TaskStore = TaskState & TaskActions;


const storeApi: StateCreator<TaskStore> = (set, get) => ({

    tasks: {
        'ABC-1': { id: 'ABC-1', title: 'Task 1', status: 'open' },
        'ABC-2': { id: 'ABC-2', title: 'Task 2', status: 'done' },
        'ABC-3': { id: 'ABC-3', title: 'Task 3', status: 'in-progress' },
        'ABC-4': { id: 'ABC-4', title: 'Task 4', status: 'open' },
        'ABC-5': { id: 'ABC-5', title: 'Task 5', status: 'done' },
        'ABC-6': { id: 'ABC-6', title: 'Task 6', status: 'in-progress' },
    },

    getTaskByStatus: (status: TaskStatus) => {
        return Object.values(get().tasks).filter((task) => {
            return task.status === status
        });
    }

})

export const useTaskStore = create<TaskStore>()(
    storeApi
);