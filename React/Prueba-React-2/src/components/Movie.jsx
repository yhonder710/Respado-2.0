
import PropTypes from 'prop-types';

function ListOfMovies ({ movies }) {
  return (
    <ul className='movies'>
      {
        movies.map(movie => (
          <li key={movie.id} className='flex flex-col justify-center items-center'>
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
            <img src={movie.poster} alt={movie.title} />
          </li>
        ))
      }
    </ul>
  )
}

function NoMoviesResults () {
  return (
    <p>No se encontraron películas para esta búsqueda</p>
  )
}

export function Movies ({ movies }) {
  const hasMovies = movies?.length > 0

  return (
    hasMovies
      ? <ListOfMovies movies={ movies } />
      : <NoMoviesResults />
  )
}


ListOfMovies.propTypes = {
  movies: PropTypes.array.isRequired,
};

Movies.propTypes = {
  movies: PropTypes.object.isRequired,
};
