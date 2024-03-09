import React from 'react';

class NavbarBuscador extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };
  }

  handleInputChange = (e) => {
    this.setState({ query: e.target.value });
  }

  handleSearch = async () => {
    const { query } = this.state;
    const url = `https://shazam.p.rapidapi.com/search?term=${encodeURIComponent(query)}&locale=en-US&offset=0&limit=5`;
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
      this.props.onSearch(result.tracks.hits);
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const { query } = this.state;

    return (
      <div className='navbar'>
        <img src={"https://static.vecteezy.com/system/resources/previews/007/373/899/original/sound-wave-logo-vector.jpg"} className="logo" />
        <div className="texto-izquierda">
          <h2>SOUND<span>WAVE</span></h2>
        </div>
        <input
          type="text"
          placeholder="Buscar música..."
          value={query}
          onChange={this.handleInputChange}
          onKeyPress={(e) => e.key === 'Enter' && this.handleSearch()}
          style={{
            width: '100%',
            padding: '10px',
            fontSize: '18px',
            border: 'none',
            borderRadius: '5px',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.15)',
          }}
        />
      </div>
    );
  }
}

export default NavbarBuscador;