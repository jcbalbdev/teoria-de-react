import PropTypes from 'prop-types'
import { useState } from 'react'



/* Componente */
export const Contador = ({numero}) => {
  /* useState (Hook de React) */
  const [contador,setContador] = useState(numero)
  /* haddle (manejador de eventos) */
  function handleClickUp() {
    setContador(Number(contador) + 1)
  }
  function handleClickDown() {
    setContador(Number(contador) - 1)
  }
  return <>
    <div>
      <p> Contador : {contador} </p>
      <button onClick={handleClickUp}>Aumenta</button>
      <button onClick={handleClickDown}>Disminuye</button>
    </div>
  </>
}

Contador.propTypes = {
  numero : PropTypes.number.isRequired
}