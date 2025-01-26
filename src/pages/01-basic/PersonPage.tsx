import { WhiteCard } from '../../components';
import { usePersonStore } from '../../stores';



export const PersonPage = () => {

  const firstName = usePersonStore((state) => state.firstName);
  const lastName = usePersonStore((state) => state.lastName);

  const setFirstName = usePersonStore((state) => state.setFirstName);
  const setLastName = usePersonStore((state) => state.setLastName);

  return (
    <>
      <h1>Persona</h1>
      <p>Información que se compartirá a otro store, Session Storage y Firebase</p>
      <hr />

      <WhiteCard className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px]">
          <form>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Primer Nombre
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={firstName}
                    onChange={({ target }) => setFirstName(target.value)}
                    placeholder="Primer Nombre"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Apellido
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={lastName}
                    placeholder="Apellido"
                    onChange={({ target }) => setLastName(target.value)}
                  />
                </div>
              </div>
            </div>
            <WhiteCard className='drop-shadow-md backdrop-blur-md hover:drop-shadow-xl transition-all duration-300'>
              <p className="text-gray-400 font-light text-sm">
                Nombre: <span className="font-bold text-gray-900" >{firstName}</span>
              </p>
              <p className="text-gray-400 font-light text-sm">
                Apellido: <span className="font-bold text-gray-900" >{lastName}</span>
              </p>
            </WhiteCard>
          </form>
        </div>
      </WhiteCard>
    </>
  );
};