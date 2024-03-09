import React, { Component } from 'react';
import '../App.css';

class Recomendaciones extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recomendaciones: [],
      topTracks: [],
    };
  }

  componentDidUpdate(prevProps) {
    const { searchResults } = this.props;
    if (searchResults !== prevProps.searchResults && searchResults.length > 0) {
      const artistId = searchResults[0].track.artists[0].adamid;
      this.fetchTopTracks(artistId);
    } else {
      this.setState({ recomendaciones: [] });
    }
  }

  fetchTopTracks = async (artistId) => {
    const url = `https://shazam.p.rapidapi.com/artists/toptracks?id=${artistId}&offset=0&limit=5`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'f17768b7a8mshc3e7425ec96bd7dp1d5bd4jsn67af2baa188f',
        'X-RapidAPI-Host': 'shazam.p.rapidapi.com',
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      if (result.toptracks) {
        this.setState({ recomendaciones: result.toptracks.track });
      } else {
        console.error('Error al obtener las canciones más populares del artista');
      }
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const { recomendaciones } = this.state;

    return (
      <div className="containerReco">
        <h3>Recomendaciones:</h3>
        <div className="recomendacion">
          {recomendaciones.map((recomendacion, index) => (
            <div className="recomendacion__item" key={index}>
              <img src={recomendacion.share.image} alt={recomendacion.title} className="recomendacion__imagen" />
              <div className="recomendacion__detalles">
                <div className="recomendacion__nombre">{recomendacion.title}</div>
                <div className="recomendacion__artista">{recomendacion.subtitle}</div>
              </div>
              <button className="recomendacion__boton">Reproducir</button>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default Recomendaciones;