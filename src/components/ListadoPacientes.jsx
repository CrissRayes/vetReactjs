import Paciente from './Paciente'

const ListadoPacientes = ({ pacientes }) => {
  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>
      <h2 className='font-black text-xl text-center'>Listado Pacientes</h2>
      <p className='text-xl mt-5 mb-10 text-center'>
        Administra tus{' '}
        <span className='text-indigo-600 font-bold'>Pacientes y Citas</span>
      </p>
      {pacientes.map(paciente => (
        <Paciente
          key={paciente.id} // se le pasa el id unico igual para el servidor y el cliente
          paciente={paciente} // se le pasa el paciente
        />
      ))}
    </div>
  )
}

export default ListadoPacientes
