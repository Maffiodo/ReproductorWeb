import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavbarLogin from '../componentes/NavbarLogin';
import Footer from '../componentes/Footer';

const Autorizar =
  "https://accounts.spotify.com/authorize?client_id=df7616b6c9ba4ce89f6167a2f11a8a77&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

function Login({ onLogin }) {


  return (
    <div style={{
      height: '100vh',
      width: '100%',
      backgroundImage: `url("https://images.unsplash.com/photo-1636144106497-9014d58248bc?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'relative'
    }}>
      <div>
        <NavbarLogin/>
      </div>

      <div style={{
        width: '100%',
        position: 'absolute',
        top: '30%'
      }} className='contentlogin'>
        <div className='left-col'>
          <h1 style={{
            fontSize: '80px',
            color: '#fff',
            marginBottom: '110px',
            float: 'left'
          }}>Música <br/> Para <br/> Todos <br/></h1>
          
        </div>
        <div className='right-col'>
        <a href={Autorizar} style={{
  padding: '10px 20px',
  fontSize: '16px',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer'
}}>Inicia sesion con spotify</a>

        </div>
      </div>
      <div>
       
      </div>
    </div>
  );
}

export default Login;
