# REACT + VITE 💻
## Carpetas y archivos 📁
* **/carpeta-principal** : Es la que contiene todas las demas carpetas . Aqui es donde instalamos **node_modules** (escriba **npm install** en la terminal 😋)
* **/public** : Es la carpeta donde se guardas las imagenes publicas (estas imagenes pueden ser vistas por el usuario si entra a ver el codigo)
* **/src** : aqui va la app.
  * **/assets**: aqui va todo el contenido estatico como imagenes , videos o audios.
  * **main.jsx** : punto de partida de la app donde se renderiza la aplicacion.
  * **App.jsx** : es un componente(funciones que retornan una estructura html) de la app que contiene un funcional component.
  > **Que es JSX?** 
  >
  > Es una extension de sintaxis de React la cual combina Html y JS permitiendo utilizar codigo Html junto a codigo Javascript para poder crear componentes dinamicos y reutilizables.
* **.gitignore** : Es el archivo que Git(nuestro controlador de versiones) va analizar para saber que cosas no se debe subir a nuestro repositorio (github ,gitlab ,etc)
* **index.html** : Es el punto de entrada de la app.
* **package.json** : aqui se encuentra la configuacion de la app en formato json.

  ### claves para tener en cuenta dentro del package.json
  
  * **"scripts"** :  contiene lo que puede ejecutar **node** en la terminal.
  
      > * **npm run dev** : nos permite abrir la app en un servidor local
      >
      > * **npm run build** : va a generar una version de distribucion (creando la carpeta **dist**).convirtiendo nuestra app de React en codigo Html , Css y JS ,para subirlo a produccion .

  * **dependecies** : son las dependecias que se van a utilizar luego de buildear(desplegar) la app.
      > * **react** : Es la libreria con la cual estamos trabajando y nos permite trabajar con JSX
      >
      > * **react-dom** : es la libreria que nos permite desarrollar para la web , por ejemplo react-native nos permite trabajar para entornos moviles
  * **devDependecies** : son las dependecias que nos sirven a la hora de desarrollar a la app(o sea no estan al finalizar el proyecto).

* **vite.config.js** : Aqui se encuentra la configuracion de **Vite**.

## Ejecucion 
  > Para ejecutar el programa escriba en la terminal **npm run dev** y asi poder abrir la app en un puerto local (presione Ctrl+Click encima de **http://localhost:...** )

## Componentes
### Que es un componente ? 
   Es un bloque(parte) de una interfaz de usuario donde se encapsula la logica o una estructura visual de una parte de lo que ve el usuario.
  > **Nota**
  >
  > Todo componente debe tener la primera letra de su nombre en mayuscula.
  
  > **Nota**
  >
  > Todo componente retorna solo una etiqueta **HTML**, por eso si queremos mostrar mas de una etiqueta debemos envolverlas en un **fragmet** ( <> </> ).

  #### Modo N°1
  > En mi componente
  ```javascript
   function saludo(){
    return <>
        <p>Holis!! , saludos nuevo usuario</p>
      </>;
    }

    export default saludo;
   ```
  > En main.jsx
   ```javascript
    import componente from './componente'
   ```
  #### Modo N°2
  > En mi componente
  ```javascript
    export const Saludo = ()=>{
      return <>
        <p>Soy una funcion flecha</p>
      </>
    }
  ```
  > En main.jsx
   ```javascript
    import {componente} from './componente'
   ```



## Variables en JSX
  Los unicos tipos de variables que no puede retornar un componente son los objetos por ende debemos transformarlos a formato JSON con :
  ```javascript
    JSON.stringify(objeto)
  ```
  > En mi componente
  ```javascript
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
  ```

## Estilos
  Para poner un estilo tanto para el **main.jsx** o un **componente**, tan solo debemos importar el archivo css dentro de **main.jsx** o de un **componente**.

## Props (propiedades)
  - Son variables que se pasan a un componente padre para ser usadas por él y sus hijos.
  - Son objetos que tienen valores que nos permiten la comunicacon entre componentes.
  > En mi componente
  ```javascript
import PropTypes from 'prop-types'
import '../styles/pokemons.css'


export const Pokemones = ({pokemon,tipo}) =>{
  return <>
    <div class="pokemon">
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
  ```
  > En main.jsx
  ```javascript
    import { Pokemones } from './componentes/Pokemons.jsx'

    <Pokemones pokemon="pokemon inicial"/> {/* aqui no se esta pasando la prop tipo por ende se pondra la variable definida por defecto */}
  ```

## Eventos
  Son mecanismos con los cuales un componente puede reaccionar a la interaccion que hace el usuario con la interfaz.