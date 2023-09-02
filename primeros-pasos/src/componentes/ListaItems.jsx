
import { useState } from 'react'
import { AgregarTarea } from './AgregarTarea'

const ListaItems = ({nombre,value}) => {
  return <li>{nombre}
            {value?'🟢':'🔴'}
  </li>
}

export const MostrarItems = () => {
  /* En AstroJS esta parte seria el JSON en la carpeta config */
  let Lista = [
    { id: 0 ,nombre:"item dentro del inventario",value:true },
    { id: 1 ,nombre:"item fuera del inventario", value:false },
  ]

  const [arreglo,setArreglo] = useState(Lista)

  /* evento personalizado para agregar una tarea nueva */
  const onAgregarTarea = (val)=>{
    /* necesitamos trimear para que la entrada este sin espacio , trim() elimina los espacios de un string */
    let valor = val.trim()
    /* para que no ingrese un valor vacio al input */
    if(valor<1)return
    const nuevaInformacion = {
      id : arreglo.length + 1,
      nombre : valor,
      visto:false
    }
    setArreglo([...arreglo,nuevaInformacion])
  }


  return <>
    <ol>
      {
        /* esto tambien es lo mismo que en AstroJS a la hora de crear componentes */
      arreglo.map((item)=>
        <ListaItems key={item.id} nombre={item.nombre} value={item.value}></ListaItems>
      )
      }
    </ol>
    <AgregarTarea agregarTarea={onAgregarTarea}></AgregarTarea>
    {/* <button onClick={handleAddTask}>agregar item</button> */}
  </>
}

