import { useEffect } from 'react';
import { JiraTasks } from '../../components';
import { useTaskStore } from '../../stores';

export const JiraPage = () => {
  const eventTaskStatus = useTaskStore((state) => state.getTaskByStatus);
  const task = useTaskStore((state) => state.tasks)

  let pendingTask = eventTaskStatus('open');
  let inProgressTask = eventTaskStatus('in-progress');
  let doneTask = eventTaskStatus('done');

  useEffect(() => {
    pendingTask = eventTaskStatus('open');
    inProgressTask = eventTaskStatus('in-progress');
    doneTask = eventTaskStatus('done');
  }, [task])

  return (
    <>
      <h1>Tareas</h1>
      <p>Manejo de estado con objectos de Zustand</p>
      <hr />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        <JiraTasks title='Pendientes' statusTask='open' tasks={pendingTask} />
        <JiraTasks title='Avanzando' statusTask='in-progress' tasks={inProgressTask} />
        <JiraTasks title='Terminadas' statusTask='done' tasks={doneTask} />

      </div>
    </>
  );
};