function App() {
  // antes del return puedes declarar variables y poner código javascript
  return (
    // dentro del return puedes poner código JSX y nunca código javascript
    // a menos que lo pongas entre llaves {}

    // Se puede usar un ternario dentro de llaves {}
    // cada componente debe tener un return
    // en el nivel mas alto solo se puede retornar un elemento div o un fragment
    // ejemplo de fragment <> </>

    <div className='App'>
      <h1>Hola Mundo</h1>
    </div>
  )
}

export default App
