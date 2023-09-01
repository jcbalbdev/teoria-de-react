import  PropTypes  from "prop-types"
/* Manejador de eventos */
function handleClick (name,lastName) {
  alert(`Hola ${name} ${lastName}`)
}
/* button */
const Button = ({name,lastName}) =>{
  return <button onClick={() => handleClick(name,lastName)}>
    Saludame
    </button>
}
/* Componente */
export const Persona = ({nombre,apellido})=>{
  return <>
    <h4>Informacion de la persona</h4>
    <p>nombre : {nombre}</p>
    <p>apellido : {apellido}</p>
    <Button name={nombre} lastName={apellido} ></Button>
  </>
}
/* PropTypes */
Button.propTypes ={
  name:PropTypes.string ,
  lastName:PropTypes.string
}


Persona.propTypes ={
  nombre : PropTypes.string.isRequired,
  apellido : PropTypes.string.isRequired
}

Persona.defaultProps = {
  nombre : "Marty" ,
  apellido : "Mc Fly"
}