import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Saludo} from './PrimerComponente.jsx'
import {Personaje} from './VariablesJsx.jsx'
import { Pokemones } from './componentes/Pokemons.jsx'
import { Persona } from './componentes/EventoSaludo.jsx'
import { Contador } from './componentes/Contador.jsx'
import { MostrarItems } from './componentes/ListaItems.jsx'
import { UserApp } from './componentes/UserApp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Saludo/>
    <Personaje/>
    <Pokemones pokemon="pokemon inicial"/> {/* aqui no se esta pasando la prop tipo por ende se pondra la variable definida por defecto */}
    <Persona/>
    <Contador numero="2"/>
    <MostrarItems></MostrarItems> 
    <UserApp></UserApp>
  </React.StrictMode>,
)
