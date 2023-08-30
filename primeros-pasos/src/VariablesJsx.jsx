import './styles/variables.css'

const string = 'Marty McFy';
const number = 200;
const array = ['sabe manejar el skate','viaja en el tiempo'];
const fecha = new Date();



export const Personaje = ()=>{
  return <>
    <h2>Nombre del personaje : {string}</h2>{/* string */}
    <p>tiempo de vida : {number}</p>{/* number */}
    <p>poderes : {array}</p>{/* array */}
    <p>fecha de creacion : {JSON.stringify(fecha)}</p>{/* objeto */}
  </>
}