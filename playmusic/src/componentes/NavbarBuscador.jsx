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

  render() {
    return (
        <div className='navbar'>
        <img src={"https://static.vecteezy.com/system/resources/previews/007/373/899/original/sound-wave-logo-vector.jpg"} className="logo" />
        <div className="texto-izquierda">
            <h2>SOUND<span>WAVE</span></h2>
        </div>
        <input 
          type="text" 
          placeholder="Buscar música..." 
          value={this.state.query} 
          onChange={this.handleInputChange}
          style={{
            width: '100%',
            padding: '10px',
            fontSize: '18px',
            border: 'none',
            borderRadius: '5px',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.15)'
          }}
        />
      </div>
    );
  }
}

export default NavbarBuscador;