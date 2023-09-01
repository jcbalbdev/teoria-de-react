import PropTypes from 'prop-types'
import { useState } from 'react'

const ListaItems = ({nombre,value}) => {
  return <li>{nombre}
            {value?'🟢':'🔴'}
  </li>
}

export const MostrarItems = () => {
  /* En AstroJS esta parte seria el JSON en la carpeta config */
  let Lista = [
    { nombre:"item dentro del inventario",value:true },
    { nombre:"item fuera del inventario", value:false },
  ]
  /* este handle agrega un nuevo valor al arreglo */
  function handleAddTask(){
    /* agregamos el arreglo con un spread operator */
    setArreglo([...arreglo,{ nombre:"nuevo item",value:false }])
  }

  const [arreglo,setArreglo] = useState(Lista)

  return <>
    <ol>
      {
        /* esto tambien es lo mismo que en AstroJS a la hora de crear componentes */
      arreglo.map((item)=>
        <ListaItems key={item.nombre} nombre={item.nombre} value={item.value}></ListaItems>
      )
      }
    </ol>

    <button onClick={handleAddTask}>agregar item</button>
  </>
}

ListaItems.propTypes = {
  nombre :PropTypes.string.isRequired ,
  value : PropTypes.bool.isRequired  
}
