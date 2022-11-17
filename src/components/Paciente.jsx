const Paciente = () => {
  return (
    <div className='m-3 bg-white shadow-md px-5 py-10 rounded-md'>
      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Nombre: <span className='font-normal normal-case'>Hook</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Propietario: <span className='font-normal normal-case'>Criss</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Email:{" "}
        <span className='font-normal normal-case'>correo@correo.com</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Fecha Alta: <span className='font-normal normal-case'>10-11-22</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Síntomas:{" "}
        <span className='font-normal normal-case'>Síntomas varios</span>
      </p>
    </div>
  )
}

export default Paciente
