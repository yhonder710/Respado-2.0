const API_KEY = '7385e54d'

export const searchMovies = async ({ search }) => {
  if (search === '') return null

  try {
    const response = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${search}`)
    const json = await response.json()

    const movies = json.Search

  return movies?.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster
  }))
  } catch (e) {
    throw new e('Error en la carga de movies')
  }

}
