# REACT + VITE 💻
## INDICE🚀 
- [REACT + VITE 💻](#react--vite-)
  - [INDICE🚀](#indice)
  - [Carpetas y archivos 📁](#carpetas-y-archivos-)
    - [claves para tener en cuenta dentro del package.json](#claves-para-tener-en-cuenta-dentro-del-packagejson)
  - [Componentes](#componentes)
    - [Que es un componente ?](#que-es-un-componente-)
      - [Modo N°1](#modo-n1)
      - [Modo N°2](#modo-n2)
  - [Variables en JSX](#variables-en-jsx)
  - [Estilos](#estilos)
    - [Clases](#clases)
  - [Props (propiedades)](#props-propiedades)
  - [Eventos](#eventos)
    - [1. Eventos con un solo argumento](#1-eventos-con-un-solo-argumento)
    - [2. Eventos con dos o mas argumentos](#2-eventos-con-dos-o-mas-argumentos)
  - [Hooks](#hooks)
    - [Hooks de React](#hooks-de-react)
      - [1. useState()](#1-usestate)
      - [2. useEffect()](#2-useeffect)
        - [Sin dependecias](#sin-dependecias)
        - [Con dependecias](#con-dependecias)
    - [Custom Hooks (Hooks personalizados)](#custom-hooks-hooks-personalizados)
  - [Metodo map y condicional ternario](#metodo-map-y-condicional-ternario)
  - [Fomularios y la buena comunicacion entre componentes](#fomularios-y-la-buena-comunicacion-entre-componentes)
    - [En en el componente padre(ListaItems)](#en-en-el-componente-padrelistaitems)
    - [En el componente hijo(AgregarTarea)](#en-el-componente-hijoagregartarea)
## Carpetas y archivos 📁
* **/carpeta-principal** : Es la que contiene todas las demas carpetas . Aqui es donde instalamos **node_modules** (escriba **npm install** en la terminal 😋)
* **/dist** : Esta **carpeta de distribucion** es creada luego de escribir en consola el comando **npm run build** (que nos permite transformar nuestro proyecto de la version de desarrollo a la version de produccion) que contendra una carpeta **/assets** (aqui hay un archivo **index.css** y un **index.js**) y un archivo **index.html** 
> **Nota** : Esta carpeta es la que se sube a produccion(con la cual haces deploy)
* **/node_modules** : Aqui estan las dependencias del proyecto
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

  > Ejecucion 
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
  Para poner clases dentro de una etiqueta **Html** en **React** debemos poner el atributo(en JSX se llaman **properties**) **className** en vez del atributo **class** ya que este ultimo nos da un error en JSX.
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
  
  ### Hooks de React
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
  #### 2. useEffect()
  El hook useEffect nos permite ejecutar una funcion cada vez que se cambia un valor o dependencia del componente.
  ##### Sin dependecias
  Cuando el **useEffect** no tiene ninguna dependencia el hook entiende que la funcion solo se ejecutara una vez al iniciar el componente, en este caso por no tener dependecias la funcion **fetchUsers** es llamada solo una vez.
  * **useState** nos permite modificar el valor de **users** con el metodo **setUsers**
  * **useEffect** nos permite ejecutar la funcion **fetchUsers** debido al cambio de valor producido por **useState** 
  > **Nota** 
  >
  > useEffect recibe como parametros una funcion flecha que me devuelve la funcion que quiero ejecutar (una o mas veces dependiendo el numero de dependencias) y un array donde estaran alamacenadas las dependencias.
  > useEffect( ( )=>{ }, [ ] )
  ```javascript
  import { useEffect, useState} from "react";


  export const UserApp = () =>{
  /* hook usestate */
  const [users, setUsers] = useState([]);
  /* llamada a una API de forma asincrona con fetch */
  const fetchUsers = async() => { 
    try{
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await response.json()
      console.log(data)
      setUsers(data)
    }
    catch(error){
      console.log(error)
    }
  }
  /* hook useEffect */
  useEffect(()=>{
    /* ejecuta la funcion cuando el componente se monta en pantalla*/
    fetchUsers()
  },[/* aqui van las dependencias */])
  /* lo que me retorna el componente */
  return <>
    <h1>lista de usuarios</h1>
    <ul>
      {
        /* map para recorrer los datos y mostrarlos por cada uno */
        users.map((user)=> <li key={user.id}>
          {user.name}
        </li>)
      }
    </ul>
  </>

      }
  ```
  ##### Con dependecias
  En este caso el hook tiene una dependencia ( endpoint ) que hara que la funcion se ejecute cuando se haga click a un boton. 
  * En uno de los componentes (**UserApp**) tendremos un handle que servira para manejar la dependencia (en este caso es un endpoint)
  ```javascript
  import { useState} from "react";
  import { UserList } from "./UserList";

  export const UserApp = () =>{

  const [endPoint, setEndPoint] = useState('users')

  /* handle nos permite cambiar la dependencia */
  const handleFetch = () => {
    setEndPoint('comments')
  }
  return <>
    <h1>lista de usuarios</h1>
    <UserList endPoint={endPoint}></UserList>
    {/* boton que nos permite cambiar el endpoint de una url */}
    <button onClick={handleFetch}>cambiar el endpoint</button>
  </>

      }
  ```
  * En otro componente hijo tendremos la funcion (**fetchData**) que sera llamada de nuevo luego que la dependencia (**endPoint**)cambie
  ```javascript
    import { useEffect, useState} from "react";

    export const UserList = ({endPoint}) => {
    /* hook usestate */
    const [data, setData] = useState([]);
    /* llamada a una API de forma asincrona con fetch */
    const fetchData = async() => { 
      try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/${endPoint}`)
        const data = await response.json()
        
        setData(data)
      }
      catch(error){
        console.log(error)
      }
    }
    useEffect(()=>{
      fetchData()
    },[endPoint])
  return (
    <>
      <ul>
      {
        endPoint == 'users' ? data.map((item)=> <li key={item.id}>
        {item.name}
      </li>)
      :data.map((item)=> <li key={item.id}>
      {item.body}
    </li>)
        
      }
      </ul>
    </>
  )
      }
  ```

  ### Custom Hooks (Hooks personalizados)
  Nos sirven para poder minimizar la carga logica en nuestros componentes.

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

## Fomularios y la buena comunicacion entre componentes
  Para una correcta comunicacion entre un componente padre y un componente hijo que sea input debemos recibir la informacion a traves de los props desde el hijo ya que asi el input cumple con su unica funcion de ingresar datos
  ### En en el componente padre(ListaItems)
  Hemos agregado un evento personalizado **onAgregarTarea** para que obtenga el valor que ingresara a la propiedad (**agregarTarea**) del componente **AgregarTarea** y con **setArreglo([...arreglo,nuevaInformacion])** agregar el objeto **nuevaInformacion** (que contiene el valor de la propiedad **agregarTarea**) al arreglo de objetos inicial.
  ```javascript
  
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
  ```
  ### En el componente hijo(AgregarTarea)
  Hemos creado dos manejadores de eventos , uno que captura la entrada del input (**handleOnChange**) y otro que envia la entrada del input (**handleOnSubmit**) a traves de un formulario. En el segundo enviamos el valor del input a traves de la propiedad **agregarTarea** 
  > **Nota**
  >
  >En este caso la propiedad **agregarTarea** esta siendo tomada como una funcion para poder pasarle el valor del input desde el hijo hacia el padre y asi el padre ponga el valor due nos devuelve **onAgregarTarea** como nuevo valor del arreglo
  ```javascript
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
  ``` 