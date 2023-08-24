# REACT + VITE
## Carpetas y archivos
* **/public** 
* **/src** : aqui va la app.
  * **/assets**: aqui va todo el contenido estatico como imagenes , videos o audios.
  * **main.jsx** : punto de partida de la app donde se renderiza la aplicacion.
  * **App.jsx** : es un componente(funciones que retornan una estructura html) de la app que contiene un funcional component.
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