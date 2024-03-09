import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavbarLogin from '../componentes/NavbarLogin';
import Footer from '../componentes/Footer';
import '../App.css';

function Login({ onLogin }) {
  const navigate = useNavigate();

  const handleClick = () => {
    // Llamar a la función onLogin para indicar que se ha iniciado sesión
    onLogin();
    // Navegar a la página principal
    navigate('/');
  };

  return (
    <div className="containelogin">
      <div>
        <NavbarLogin/>
      </div>

      <div className='contentlogin'>
        <div className='left-col'>
          <h1>Música <br/> Para <br/> Todos</h1>
        </div>
        <div className='right-col'>
          <button  onClick={handleClick}>Ingresa a SoundWave</button>
        </div>
      </div>
      <div>
       
      </div>
    </div>
  );
}

export default Login;