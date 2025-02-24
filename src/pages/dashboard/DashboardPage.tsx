import { IoAccessibilityOutline, IoHeartOutline, IoListOutline, IoLockClosedOutline, IoPawOutline } from 'react-icons/io5';
import { WhiteCard } from '../../components';
import { userBearStore } from '../../stores/bears';
import { usePersonStore, useTaskStore } from '../../stores';

export const Dashboard = () => {

  const totalBears = userBearStore((state) => state.totalBears);
  const firstName = usePersonStore((state) => state.firstName);
  const acountTask = useTaskStore(state => state.totalTasks);

  return (
    <>
      <h1>Dashboard</h1>
      <p>Información colectiva de varios stores de Zustand</p>
      <hr />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">

        <WhiteCard centered>
          <IoPawOutline size={50} className="text-indigo-600" />
          <h2>Osos</h2>
          <p className='font-semibold'>Osos Totales:
            {' '}<span className='font-light'>{totalBears()}</span>
          </p>
        </WhiteCard>


        <WhiteCard centered>
          <IoAccessibilityOutline size={50} className="text-indigo-600" />
          <h2>Persona</h2>
          <p>{firstName ? firstName + ' is Active' : 'information'}</p>
        </WhiteCard>


        <WhiteCard centered>
          <IoListOutline size={50} className="text-indigo-600" />
          <h2>Tareas</h2>
          <p>{acountTask() > 0 ? `hay ${acountTask()} tareas` : 'no hay tareas'}</p>
        </WhiteCard>


        <WhiteCard centered>
          <IoHeartOutline size={50} className="text-indigo-600" />
          <h2>Boda</h2>
          <p>Información</p>
        </WhiteCard>


        <WhiteCard centered>
          <IoLockClosedOutline size={50} className="text-indigo-600" />
          <h2>Auth</h2>
          <p>Información</p>
        </WhiteCard>
      </div>

    </>
  );
};