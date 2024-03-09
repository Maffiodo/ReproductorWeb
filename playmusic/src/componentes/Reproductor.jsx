import React from 'react';

class Reproductor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: props.searchResults || []
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.searchResults !== this.props.searchResults) {
      this.setState({ searchResults: this.props.searchResults });
    }
  }

  render() {
    const { searchResults } = this.state;

    return (
      <div className="containerRepro">
        <h3>Resultados de búsqueda:</h3>
        <div className="card-container">
          {searchResults.map((track, index) => (
            <div
              key={track.track.key}
              className="card"
              style={{
                marginRight: index % 3 === 2 ? 0 : '20px',
                marginBottom: index >= 3 ? '20px' : 0,
              }}
            >
              <img src={track.track.images.coverart} alt={track.track.title} />
              <h4>{track.track.title}</h4>
              <p>{track.track.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Reproductor;