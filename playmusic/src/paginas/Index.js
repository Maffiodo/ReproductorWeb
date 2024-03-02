import React from 'react'
import '../App.css';
import NavbarBuscador from '../componentes/NavbarBuscador';
import Recomendaciones from '../componentes/Recomendaciones';
import Reproductor from '../componentes/Reproductor';


function Index() {
  return (
    <div>
    <header>
      <NavbarBuscador />  
    </header>
    <div className="containerRepro">
    <Recomendaciones />
      <Reproductor />
    </div>
    
  </div>
  )
}

export default Index