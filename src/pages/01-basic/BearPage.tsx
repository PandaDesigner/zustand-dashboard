import { useShallow } from 'zustand/shallow';
import { WhiteCard } from '../../components';
import { userBearStore } from '../../stores/bears';

export const BearPage = () => {

  return (
    <>
      <h1>Contador de Osos</h1>
      <p>Manejo de estado simple de Zustand</p>
      <hr />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        <BearPage.BlackBears />
        <BearPage.PolarBears />
        <BearPage.PandaBears />
        <BearPage.BearsDisplay />
      </div>

    </>
  );
};


export const BlackBears = () => {
  const blackBears = userBearStore((state) => state.blackBears);
  const increaBlackBears = userBearStore((state) => state.increaseBlackBears);
  return (<WhiteCard centered>
    <h2>Osos Negros</h2>
    <div className="flex flex-col md:flex-row">
      <button onClick={() => increaBlackBears(+1)}> +1</button>
      <span className="text-3xl mx-2 lg:mx-10"> {blackBears} </span>
      <button onClick={() => increaBlackBears(-1)}>-1</button>
    </div>
  </WhiteCard>)

}

export const PolarBears = () => {
  const polarBears = userBearStore((state) => state.polarBears);
  const increasePolarBears = userBearStore((state) => state.increasePolarBears);
  return (<WhiteCard centered>
    <h2>Osos Polar</h2>
    <div className="flex flex-col md:flex-row">
      <button onClick={() => increasePolarBears(+1)}> +1</button>
      <span className="text-3xl mx-2 lg:mx-10"> {polarBears} </span>
      <button onClick={() => increasePolarBears(-1)}>-1</button>
    </div>
  </WhiteCard>)
}

export const PandaBears = () => {
  const pandaBears = userBearStore((state) => state.pandaBears);
  const increasePandaBears = userBearStore((state) => state.increasePandaBears);
  return (<WhiteCard centered>
    <h2>Osos Panda</h2>
    <div className="flex flex-col md:flex-row">
      <button onClick={() => increasePandaBears(+1)}> +1</button>
      <span className="text-3xl mx-2 lg:mx-10"> {pandaBears} </span>
      <button onClick={() => increasePandaBears(-1)}>-1</button>
    </div>
  </WhiteCard>)
}

export const BearsDisplay = () => {

  const bears = userBearStore(useShallow((state) => state.bears));
  const addBear = userBearStore((state) => state.addBear);
  const clearBears = userBearStore((state) => state.clearBears)

  return (
    <WhiteCard centered>
      <h2>
        Osos
      </h2>
      <div className='flex flex-row gap-2 my-4'>
        <button className='text-xs px-4 py-2 my-0 font-light' onClick={() => addBear()} >Agregar Oso</button>
        <button className='text-xs px-4 py-2 my-0 font-light' onClick={clearBears}>Eliminar Osos</button>
      </div>
      <ul>
        {bears.map((bear) => (
          <li key={bear.id} className='text-xs font-normal'>
            <p className='font-semibold'>
              Name Bears: <span className='font-light'>{bear.name}</span>
            </p>
            <span>
              <span className='font-bold'>Type: </span> {bear.type}
            </span>
            <hr />
          </li>
        ))}
      </ul>


    </WhiteCard>
  )
};

BearPage.BlackBears = BlackBears;
BearPage.PolarBears = PolarBears;
BearPage.PandaBears = PandaBears;
BearPage.BearsDisplay = BearsDisplay;