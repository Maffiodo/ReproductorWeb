import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Login from './paginas/Login';
import Index from './paginas/Index'; // O el nombre correcto del componente principal

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Lógica para manejar el inicio de sesión
    setLoggedIn(true);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={loggedIn ? <Index /> : <Login onLogin={handleLogin} />} />
      </Routes>
    </Router>
  );
}

export default App;