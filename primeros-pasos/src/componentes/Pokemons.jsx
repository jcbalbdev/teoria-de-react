import PropTypes from 'prop-types'
import '../styles/pokemons.css'


export const Pokemones = ({pokemon,tipo}) =>{
  return <>
    <div className="pokemon">
      <h3>Nombre : {pokemon}</h3>
      <p>Tipo : {tipo}</p>
    </div>
  </>
}

/* las props obligatorias */

Pokemones.propTypes = {
  pokemon : PropTypes.string.isRequired,
  tipo : PropTypes.string.isRequired
}

/* las props por defecto */

Pokemones.defaultProps = {
  pokemon: "pikachu",
  tipo:"electrico"  // si no se pasa el valor de la prop es electrico
}