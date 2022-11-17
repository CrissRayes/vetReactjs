// Define ListadoPacientes component

const ListadoPacientes = () => {
  return (
    <div className='w-1/2 lg:w-3/5'>
      <h2 className='font-black text-xl text-center'>Listado Pacientes</h2>
      <p className='text-xl mt-5 mb-10 text-center'>
        Administra tus{" "}
        <span className='text-indigo-600 font-bold'>Pacientes y Citas</span>
      </p>
      <div className='m-3 bg-white shadow-md px-5 py-10'>
        <p>
          Nombre: <span>Hook</span>
        </p>
      </div>
    </div>
  )
}

export default ListadoPacientes
