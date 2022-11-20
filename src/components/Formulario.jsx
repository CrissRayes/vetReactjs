import { useState, useEffect } from "react"
import Error from "./Error"

// create component
const Formulario = ({ pacientes, setPacientes }) => {
  // extraer variables con destructuring de useState
  // asigna nombre a la variable y setNombre a la funcion que modifica el estado
  // El orden de declaración de states debe ser según se va requiriendo en el componente
  const [nombre, setNombre] = useState("")
  const [propietario, setPropietario] = useState("")
  const [email, setEmail] = useState("")
  const [fecha, setFecha] = useState("")
  const [sintomas, setSintomas] = useState("")

  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault() // para que no se recargue la pagina
    // validar formulario
    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      setError(true) // no se modifica el estado directamente, se usa la funcion
      return // para que no se siga ejecutando el codigo
    }

    setError(false) // para que desaparezca la alerta

    // Constuye el objeto paciente con los datos del formulario
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
    }

    // No usar push porque modifica el arreglo original
    // para evitar eso se usa el spread operator
    // se pasa el objetoPaciente al arreglo de pacientes
    setPacientes([...pacientes, objetoPaciente])

    // Reiniciar el formulario
    setNombre("")
    setPropietario("")
    setEmail("")
    setFecha("")
    setSintomas("")
  }

  return (
    <div className='md:w-1/2 lg:w-2/5'>
      <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>
      <p className='text-lg mt-5 text-center mb-10'>
        Añade Pacientes y {""}
        <span className='text-indigo-600 font-bold'>Administralos</span>
      </p>
      <form
        onSubmit={handleSubmit}
        className='bg-white shadow-md rounded-md py-10 px-5 mb-10'
      >
        {/* si error es true, entonces se imprime el mensaje */}
        {/* se pasa un mensaje como props al componente Error */}
        {error && <Error mensaje='Todos los campos son obligatorios' />}

        <div className='mb-5'>
          <label
            htmlFor='mascota'
            className='block text-gray-700 uppercase font-bold'
          >
            Nombre Mascota
          </label>
          <input
            id='mascota'
            type='text'
            placeholder='Nombre de la Mascota'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent'
            value={nombre} // value del input
            onChange={(e) => setNombre(e.target.value)} // setea el valor del input
          />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='propietario'
            className='block text-gray-700 uppercase font-bold'
          >
            Nombre Propietario
          </label>
          <input
            id='propietario'
            type='text'
            placeholder='Nombre del Propietario'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent'
            value={propietario} // value del input
            onChange={(e) => setPropietario(e.target.value)} // setea el valor del input
          />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='email'
            className='block text-gray-700 uppercase font-bold'
          >
            Email
          </label>
          <input
            id='email'
            type='email'
            placeholder='Email contacto'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent'
            value={email} // value del input
            onChange={(e) => setEmail(e.target.value)} // setea el valor del input
          />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='alta'
            className='block text-gray-700 uppercase font-bold'
          >
            Alta
          </label>
          <input
            id='alta'
            type='date'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent'
            value={fecha} // value del input
            onChange={(e) => setFecha(e.target.value)} // setea el valor del input
          />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='sintomas'
            className='block text-gray-700 uppercase font-bold'
          >
            Síntomas
          </label>
          <textarea
            id='sintomas'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent'
            placeholder='Describe los sintomas'
            value={sintomas} // value del input
            onChange={(e) => setSintomas(e.target.value)} // setea el valor del input
          />
        </div>
        <input
          type='submit'
          className='bg-indigo-600 w-full p-2 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all'
          value='Agregar Paciente'
        />
      </form>
    </div>
  )
}

// export component
export default Formulario
