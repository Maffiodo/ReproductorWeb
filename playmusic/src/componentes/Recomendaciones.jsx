import React from 'react'
import '../App.css';
function Recomendaciones() {
  const recomendaciones = [
    {
      imagen: "https://edm.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cg_faces:center%2Cq_auto:good%2Cw_768/MTYzNDMxNjI5Mjc1MDE0NDk4/salvatore-ganacci-horse.png",
      nombre: "Horse",
      artista: "Salvatore Ganacci"
    },
    {
        imagen: "https://i.ytimg.com/vi/5NzmS2IzG-g/maxresdefault.jpg",
        nombre: "Kong 2.0",
        artista: "Steve Aoki, Natanael Cano"
      },
      {
        imagen: "https://i.ytimg.com/vi/NZ1cVn6wxLE/maxresdefault.jpg",
        nombre: "Proyecto X",
        artista: "Gabito Ballesteros, Natanael Cano"
      },
      {
        imagen: "https://i.scdn.co/image/ab67616d0000b273e2e093427065eaca9e2f2970",
        nombre: "Pancake",
        artista: "Natanael Cano, Peso Pluma"
      },
      {
        imagen: "https://edm.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cg_faces:center%2Cq_auto:good%2Cw_768/MTYzNDMxNjI5Mjc1MDE0NDk4/salvatore-ganacci-horse.png",
        nombre: "Horse",
        artista: "Salvatore Ganacci"
      },
      {
          imagen: "https://i.ytimg.com/vi/5NzmS2IzG-g/maxresdefault.jpg",
          nombre: "Kong 2.0",
          artista: "Steve Aoki, Natanael Cano"
        },
        {
          imagen: "https://i.ytimg.com/vi/NZ1cVn6wxLE/maxresdefault.jpg",
          nombre: "Proyecto X",
          artista: "Gabito Ballesteros, Natanael Cano"
        },
        {
          imagen: "https://i.scdn.co/image/ab67616d0000b273e2e093427065eaca9e2f2970",
          nombre: "Pancake",
          artista: "Natanael Cano, Peso Pluma"
        },
    
  ];

  return (
    <div className="containerReco">
      <div className="recomendacion">
        {recomendaciones.map((recomendacion, index) => (
          <div className="recomendacion__item" key={index}>
            <img src={recomendacion.imagen} alt={`Imagen Canción ${index + 1}`} className="recomendacion__imagen"/>
            <div className="recomendacion__detalles">
              <div className="recomendacion__nombre">{recomendacion.nombre}</div>
              <div className="recomendacion__artista">{recomendacion.artista}</div>
            </div>
            <button className="recomendacion__boton">Reproducir</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Recomendaciones