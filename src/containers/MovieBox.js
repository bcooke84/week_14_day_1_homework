import React from 'react';
import MovieList from '../components/MovieList.js'
import GetShowtimesButton from '../components/GetShowtimesButton.js'
import SeeMoreLink from '../components/SeeMoreLink.js'

class MovieBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: 1, name: 'Sausage Party' },
        { id: 2, name: 'Cafe Society' },
        { id: 3, name: 'Morgan' },
        { id: 4, name: 'The 9th Life of Louis Drax' },
        { id: 5, name: 'Naam Hai Akira' },
        { id: 6, name: 'Equity' },
        { id: 7, name: 'Things to Come' },
      ]
    }
  }
  render() {
    return (
      <div className='movie-box'>
        <h4 className='opening-heading'>UK Opening This Week</h4>
        <MovieList data={this.state.data}/>
        <SeeMoreLink/>
        <GetShowtimesButton/>
      </div>
    )
  }
}

export default MovieBox;
