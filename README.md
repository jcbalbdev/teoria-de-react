# REACT + VITE 💻
## INDICE🚀 
1. [Componentes](/Componentes/)
## Carpetas y archivos 📁
* **/carpeta-principal** : Es la que contiene todas las demas carpetas . Aqui es donde instalamos **node_modules** (escriba **npm install** en la terminal 😋)
* **/public** : Es la carpeta donde se guardas las imagenes publicas (estas imagenes pueden ser vistas por el usuario si entra a ver el codigo)
* **/src** : aqui va la app.
  * **/assets**: aqui va todo el contenido estatico como imagenes , videos o audios.
  * **/components** : en esta carpeta suelen ponerse los componentes que hemos creado.
  * **/styles** : en esta carpeta suelen ponerse los estilos. 
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
  > Todo componente retorna solo una etiqueta **HTML**, por eso si queremos mostrar mas de una etiqueta debemos envolverlas en un **fragmet** ( **<> </>** ).

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
  ### Clases 
  Para poner clases dentro de una etiqueta **Html** en **React** debemos poner el atributo **className** en vez del atributo **class** ya que este ultimo nos da un error en JSX.
  ```javascript
    <div className="pokemon">
      <h3>Nombre : {pokemon}</h3>
      <p>Tipo : {tipo}</p>
    </div>
  ```

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
  > **Nota** ⚠
  >
  > En estos ejemplos solo modificaremos el valor en consola pero no estamos cambiando la interfaz. Para cambiar la interfaz con **React** debemos utilizar **Hooks**

  ### 1. Eventos con un solo argumento
  * **Primera Forma**
    ```javascript
    /* Manejador de eventos */
      function HandleClick (event) {
        console.log(event)
      }
      /* button */
      const Button = () =>{
        return <button onClick={event => HandleClick(event)}>
          Saludame
          </button>
      }
      /* Componente */
      export const Pokemones = ({pokemon,tipo}) =>{
        return <>
          <div className="pokemon">
          <h3>Nombre : {pokemon}</h3>
          <p>Tipo : {tipo}</p>
          </div>
        </>
      }
    ``` 
    * **Segunda forma**
    ```javascript
    /* Manejador de eventos */
      function HandleClick (event) {
        console.log(event)
      }
      /* button */
      const Button = () =>{
        return <button onClick={event => HandleClick(event)}>
          Saludame
          </button>
      }
      /* Componente */
      export const Pokemones = ({pokemon,tipo}) =>{
        return <>
          <div className="pokemon">
          <h3>Nombre : {pokemon}</h3>
          <p>Tipo : {tipo}</p>
          </div>
        </>
      }
    ```     
  ### 2. Eventos con dos o mas argumentos
  ```javascript
    import  PropTypes  from "prop-types"
    /* Manejador de eventos */
    function handleClick (name,lastName) {
      alert(`Hola ${name} ${lastName}`)
    }
    /* button */
    const Button = ({name,lastName}) =>{
      return <button onClick={() => handleClick(name,   lastName)}>
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
  ```



## Hooks
  Es una **funcion especial** que nos permite utilizar una funcion de React en un componente tipo funcion. Nos sirven para poder **manejar (modificar) el estado y otras caracterisitcas** de React sin la necesidad de utilizar componentes de tipo clase.

  > **Nota**
  >
  > **Que es el estado en React ?**
  > Es un objeto que contiene datos y representa la informacion que una interfaz de usuario necesita para poder renderizarse (representarse de manera grafica) y funcionar correctamente. Es mutable y contiene todos los datos que necesita un componente para funcionar de manera correcta y mutar si es que lo necesita. 
  
  * ### Hooks de React
    #### 1. useState()
    * Para utilizar useState debemos importar el Hook de react de la libreria de react
    > import { useState } from 'react'
    * Dentro del componente de funcion debemos declarar una constante que contiene una variable (**contador**) y un metodo (**setContador**) que nos permite cambiar el valor de dicha variable, dicha constante debe ser igual a la funcion, metodo o hook llamado **useState** que contendra el valor inicial de **contador**.
    > const [contador,setContador] = useState(numero)
    
    ```javascript
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
          < onClick={handleClickDown}>Disminuye</   button>
        </div>
      </>
    }

    Contador.propTypes = {
      numero : PropTypes.number.isRequired
    }
    ```
  * ### Custom Hooks (Hooks personalizados)


## Metodo map y condicional ternario
  * El metodo Map nos permite iterar sobre un arreglo o una coleccion para poder renderizar cada uno de los elementos del mismo.
  * El metodo Map junto al condicional ternario nos serviria para crear componentes mas pequeños de manera mucho mas facil.La creacion de componentes cada vez mas pequeños se le llama **Atomic Design**.
  > **Que es Atomic Design?**
  > Es un enfoque de diseño de las interfaces de usuario que se basa en la creacion y organizacion de componentes reutilizables. La idea en la cual se basa es de crear componentes muy pequeños o atomicos (indivisibles), luego hacer componentes cada vez mas grandes y asi poder crear una interfaz desde su parte mas pequeña hasta la mas grande tratando de reutilizar lo mas posible los componentes minimos.

  ```javascript
  import PropTypes from 'prop-types'
  import { useState } from 'react'

  const ListaItems = ({nombre,value}) => {
    return <li>{nombre}
              {value?'🟢':'🔴'}
    </li>
  }

  export const MostrarItems = () => {
    /* En AstroJS esta parte seria el JSON en la carpeta  config */
    let Lista = [
      { nombre:"item dentro del inventario",value:true },
      { nombre:"item fuera del inventario", value:false },
    ]
    /* este handle agrega un nuevo valor al arreglo */
    function handleAddTask(){
      /* agregamos el arreglo con un spread operator */
      setArreglo([...arreglo,{ nombre:"nuevo item", value:false }])
    }

    const [arreglo,setArreglo] = useState(Lista)

    return <>
      <ol>
        {
          /* esto tambien es lo mismo que en AstroJS a la   hora de crear componentes */
        arreglo.map((item)=>
          <ListaItems key={item.nombre} nombre={item. nombre} value={item.value}></ListaItems>
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
  ```
  