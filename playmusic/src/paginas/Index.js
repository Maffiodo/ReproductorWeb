import React, { useState } from 'react';
import '../App.css';
import NavbarBuscador from '../componentes/NavbarBuscador';
import Recomendaciones from '../componentes/Recomendaciones';
import Reproductor from '../componentes/Reproductor';

function Index() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (results) => {
    setSearchResults(results);
  };

  return (
    <div>
      <header>
        <NavbarBuscador onSearch={handleSearch} />
      </header>
      <div className="containerRepro">
        <Reproductor searchResults={searchResults} />
      </div>
    </div>
  );
}

export default Index;