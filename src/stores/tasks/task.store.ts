import { create, StateCreator } from 'zustand';
import { v4 as uuidv4 } from 'uuid';
import { Task, TaskStatus } from '../../interfaces';
import { devtools, persist } from 'zustand/middleware';
import { produce } from 'immer';
import { immer } from 'zustand/middleware/immer';
import { customStora } from '../storages';



interface TaskState {
    draggingTaskId?: string;
    tasks: Record<string, Task>;
}

interface TaskActions {
    getTaskByStatus: (status: TaskStatus) => Task[];
    addTask: (title: string, status: TaskStatus) => void;
    setDraggingTaskId: (taskId: string) => void;
    removeDraggingTaskId: () => void;
    changeTaskStatus: (taskId: string, status: TaskStatus) => void;
    onTaskDrop: (status: TaskStatus) => void;
    totalTasks: () => number;
}

type TaskStore = TaskState & TaskActions;


const storeApi: StateCreator<TaskStore, [["zustand/immer", never], ["zustand/immer", never]], []> = (set, get) => ({

    draggingTaskId: undefined,
    tasks: {
        'ABC-1': { id: 'ABC-1', title: 'Task 1', status: 'open' },
        'ABC-2': { id: 'ABC-2', title: 'Task 2', status: 'open' },
        'ABC-3': { id: 'ABC-3', title: 'Task 3', status: 'in-progress' },
        'ABC-4': { id: 'ABC-4', title: 'Task 4', status: 'open' },

    },

    getTaskByStatus: (status: TaskStatus) => {
        return Object.values(get().tasks).filter((task) => {
            return task.status === status
        });
    },

    addTask: (title: string, status: TaskStatus) => {

        const newTask = { id: uuidv4(), title, status }

        set(state => {
            state.tasks[newTask.id] = newTask
        })

        //?npm i immer
        // set(produce((state: TaskState) => {
        //     state.tasks[newTask.id] = newTask
        // }))

        //? Forma nativa de Zustand
        // set({
        //     tasks: {
        //         ...get().tasks,
        //         [newTask.id]: newTask
        //     }
        // })

    },

    setDraggingTaskId: (taskId: string) => {
        set({ draggingTaskId: taskId });
        return;
    },
    removeDraggingTaskId: () => {
        set({ draggingTaskId: undefined });
        return;
    },

    changeTaskStatus: (taskId: string, status: TaskStatus) => {
        const task = { ...get().tasks[taskId] };
        task.status = status;

        set(produce(state => {
            state.tasks[taskId] = {
                ...task,
            };
        }))
        //?implementacion nativa
        // set({
        //     tasks: {
        //         ...get().tasks,
        //         [taskId]: task
        //     }
        // })
    },
    onTaskDrop: (status: TaskStatus) => {
        const taskId = get().draggingTaskId;
        if (!taskId) return;
        get().changeTaskStatus(taskId, status);
        get().removeDraggingTaskId;
    },
    totalTasks: () => {
        const acountTask: number = Object.values(get().tasks).length | 0
        return acountTask
    }

})

export const useTaskStore = create<TaskStore>()(
    devtools(
        persist(immer(storeApi), {
            name: 'task-storage',
            storage: customStora
        }
        )
    ));