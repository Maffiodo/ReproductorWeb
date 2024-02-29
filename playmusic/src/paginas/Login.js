import React from 'react';
import './login.css';
import NavbarLogin from '../componentes/NavbarLogin';
import Footer from '../componentes/Footer';

function Login() {
    return (
        <div className="container">
            <div>
            <NavbarLogin/>
            </div>

            <div className='content'>
                <div className='left-col'>
                        <h1>Música <br/> Para <br/> Todos</h1>
                </div>
                <div className='right-col'>
                 <a href='#app'>Ingresa a SoundWave</a>
                </div>
            </div>
            <div>
            <Footer/>
            </div>
        </div>
        
    );
}

export default Login;