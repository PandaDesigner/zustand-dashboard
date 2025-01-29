import { IoAddOutline, IoCheckmarkCircleOutline } from 'react-icons/io5';

import { Task, TaskStatus } from '../../interfaces';
import { SingleTask } from './SigleTask';

import classNames from 'classnames';
import { useTasks } from '../../hooks/useTasks';

interface Props {
  title: string;
  tasks: Task[];
  statusTask: TaskStatus;
}


export const JiraTasks = ({ title, tasks, statusTask }: Props) => {

  const {
    handleDragOver,
    handleLeave,
    handleDrop,
    isDraggingTaskId,
    onDragOver,
    handleAddTask } = useTasks({ statusTask });



  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleLeave}
      onDrop={handleDrop}
      className={classNames("!text-black relative flex flex-col rounded-[20px]  bg-white bg-clip-border shadow-3xl shadow-shadow-500  w-full !p-4 3xl:p-![18px] border-2 transition-all", {
        'border-indigo-600 border-dotted duration-300': isDraggingTaskId,
        'border-green-600 border-dotted drop-shadow-md': isDraggingTaskId && onDragOver
      })}>


      {/* Task Header */}
      <div className="relative flex flex-row justify-between">

        <div className="flex items-center justify-center">

          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100">
            <span className="flex justify-center items-center h-6 w-6 text-brand-500">
              <IoCheckmarkCircleOutline style={{ fontSize: '50px' }} />
            </span>
          </div>

          <h4 className="ml-4 text-xl font-bold text-navy-700">{title}</h4>
        </div>

        <button onClick={() => handleAddTask()}>
          <IoAddOutline />
        </button>

      </div>

      {/* Task Items */}
      <div className="h-full w-full ">

        {
          tasks.map((task) => {
            return (
              <SingleTask key={task.id} task={task} css={classNames({ 'rounded-sm drop-shadow-md': isDraggingTaskId, 'text-gray-500': statusTask == 'done' })} />
            )
          })
        }
      </div>
    </div>
  );
};