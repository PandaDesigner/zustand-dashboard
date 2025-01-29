import { IoReorderTwoOutline } from 'react-icons/io5';
import { Task } from '../../interfaces';
import { useTaskStore } from '../../stores';

interface Props {
    task: Task;
    css?: string;
}

export const SingleTask = ({ task, css }: Props) => {

    const onDragStart = useTaskStore((state) => state.setDraggingTaskId);
    const onDragEnd = useTaskStore((state) => state.removeDraggingTaskId);

    return (
        <div
            draggable
            onDragStart={() => onDragStart(task.id)}
            onDragEnd={() => onDragEnd()}
            className={`text-navy-700 mt-5 flex items-center justify-between p-2 backdrop-blur-lg bg-white bg-opacity-10 rounded-lg ${css}`}>
            <div className="flex items-center justify-center gap-2">
                <p className="text-base font-bold text-inherit">
                    {task.title}
                </p>
            </div>
            <span className=" h-6 w-6 text-navy-700 cursor-pointer self-center pt-2">
                <IoReorderTwoOutline />
            </span>
        </div>
    )
};