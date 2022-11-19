import { useState } from "react"
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {
  // antes del return puedes declarar variables y poner código javascript

  const [pacientes, setPacientes] = useState([]) // el array se llena pasandole props desde Formulario.jsx

  return (
    // dentro del return puedes poner código JSX y nunca código javascript
    // a menos que lo pongas entre llaves {}

    // Se puede usar un ternario dentro de llaves {}
    // cada componente debe tener un return
    // en el nivel mas alto solo se puede retornar un elemento div o un fragment
    // ejemplo de fragment <> </>

    <div className='container mx-auto mt-20'>
      <Header />
      <div className='mt-12 md:flex'>
        {/* Se pasan los pacientes para que luego desde el form se vayan agregando al arreglo inicial */}
        {/*  Se pasa la funcion setPacientes como props al componente Formulario */}
        <Formulario pacientes={pacientes} setPacientes={setPacientes} />
        <ListadoPacientes />
      </div>
    </div>
  )
}

export default App
