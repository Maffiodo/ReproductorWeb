import React from 'react'
import './style.css';

function NavbarLogin() {
  return (
    <div className='navbar'>
    <img src={"https://static.vecteezy.com/system/resources/previews/007/373/899/original/sound-wave-logo-vector.jpg"} className="logo" />
    <div className="texto-izquierda">
        <h2>SOUND<span>WAVE</span></h2>
    </div>
    <ul>
      <li><a href="#contact" >Contacto</a></li>
      <li><a href="#about" >Nosotros</a></li>
    </ul>
    </div>
  )
}

export default NavbarLogin
