import React, { Component } from 'react';
import Movie from '../components/Movie.js'

class MovieList extends Component {

  render() {
    const movieNodes = this.props.data.map( (movie) => {
      return <Movie name={movie.name} key={movie.id}>
        {movie.name}
      </Movie>
    });
    return (
      <div className="movie-list">{movieNodes}</div>
    )
  }
}

export default MovieList;
