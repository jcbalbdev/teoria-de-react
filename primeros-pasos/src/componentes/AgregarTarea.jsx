import { useState } from "react"

export const AgregarTarea = ({agregarTarea}) => {

  const [input, setinput] = useState('')
  /* este handle captura la entrada del input */
  const handleOnChange = (event) =>{
    setinput(event.target.value)
  }
  /* este handle envia lo que se ingreso en el input  */
  const handleOnSubmit = (event) =>{
    /* preventdefault nos sirve para que al ingresar un dato en el formulario la pagina no recarge  */
    event.preventDefault()
    agregarTarea(input)
  }
  return (
    <form onSubmit={handleOnSubmit}>
      <input 
        type="text" 
        placeholder="Ingresa tarea nueva"
        value={input}
        onChange={handleOnChange}
      />
    </form>
  )
}
