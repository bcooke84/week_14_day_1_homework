import React from 'react';

class Movie extends React.Component {

  render() {
    return (
    <div className='movie'>
      <a className="title-link" href=""><p className='movie-title'>{this.props.name}</p></a>
      <a className="showtimes-link" href=""><p className='showtimes'>Showtimes</p></a>
    </div>
  )
  }
}

export default Movie;
