// create component
const Formulario = () => {
  return (
    <form>
      <div className='campo'>
        <label>Nombre Mascota</label>
        <input
          type='text'
          name='mascota'
          className='u-full-width'
          placeholder='Nombre Mascota'
        />
      </div>
      <div className='campo'>
        <label>Nombre Dueño</label>
        <input
          type='text'
          name='propietario'
          className='u-full-width'
          placeholder='Nombre Dueño de la Mascota'
        />
      </div>
      <div className='campo'>
        <label>Fecha</label>
        <input type='date' name='fecha' className='u-full-width' />
      </div>
      <div className='campo'>
        <label>Hora</label>
        <input type='time' name='hora' className='u-full-width' />
      </div>
      <div className='campo'>
        <label>Síntomas</label>
        <textarea className='u-full-width' name='sintomas'></textarea>
      </div>
      <button type='submit' className='u-full-width button-primary'>
        Agregar Cita
      </button>
    </form>
  )
}

// export component
export default Formulario
