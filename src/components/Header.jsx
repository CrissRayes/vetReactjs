// create component
const Header = () => {
  // no olvidar un unico return
  return (
    // fragment
    <>
      <h1 className='font-black text-5xl text-center md:w-1/2 mx-auto'>
        Seguimiento Pacientes {""}
        <span className='text-indigo-600'>Veterinaria</span>
      </h1>
    </>
  )
}

// export component
export default Header
