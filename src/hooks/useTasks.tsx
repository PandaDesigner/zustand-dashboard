import React, { useState } from 'react';
import { useTaskStore } from '../stores';
import Swal from 'sweetalert2';
import { TaskStatus } from '../interfaces';

interface Props {
    statusTask: TaskStatus
}

export const useTasks = ({ statusTask }: Props) => {

    const isDraggingTaskId = useTaskStore(state => !!state.draggingTaskId);
    const onTaskDrop = useTaskStore(state => state.onTaskDrop);
    const addTask = useTaskStore(state => state.addTask);
    const [onDragOver, setOnDragOver] = useState(false);

    const handleAddTask = async () => {
        const { value, isConfirmed } = await Swal.fire({
            title: 'New Task',
            input: 'text',
            inputLabel: 'New title task',
            inputPlaceholder: 'Add name Task',
            showCancelButton: true,
            inputValidator: (statusTask) => {
                if (!statusTask) {
                    return 'required title name for task!'
                }
            }
        });

        if (!isConfirmed) return;
        addTask(value, statusTask);
    };

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setOnDragOver(true);
    };

    const handleLeave = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setOnDragOver(false)
    };

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setOnDragOver(false);
        onTaskDrop(statusTask)
    };

    return {
        isDraggingTaskId,
        onDragOver,
        handleAddTask,
        handleDragOver,
        handleLeave,
        handleDrop
    }

}
