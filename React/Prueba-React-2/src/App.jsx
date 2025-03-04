import { useMovies } from './hooks/useMovies.js'
import { useSearch } from './hooks/useSearch.js'
import { Movies } from './components/Movie.jsx'
import { useState, useCallback, } from 'react'
import debounce from 'just-debounce-it'


function App() {
  const [sort, setSort] = useState()
  const { search, updateSearch, error} = useSearch()
  const { movies, loading, getMovies } = useMovies({ search, sort })

  const debounceGetMovies = useCallback(
    debounce(search => {
      console.log('search', search)
      getMovies({ search })
    }, 300)
    , [getMovies]
  )

  const handleSubmit = (e) => {
    e.preventDefault()
    getMovies({ search })
  }

  const handleChange = (e) => {
    const newSearch = e.target.value
    updateSearch(newSearch)
    debounceGetMovies(newSearch)
  }

  const handleSort = () => {
    setSort(!sort)
  }


  return (
    <div className="flex flex-col justify-center items-center">
    <header>
      <h1>Buscador de peliculas</h1>
      <form className="flex items-center" onSubmit={handleSubmit}>
        <input onChange={handleChange} value={search} name='pelis' placeholder="Avenger, Star Wars, The Matrix..."/>
        <input type="checkbox" onChange={handleSort} checked={sort} />
        <button type="submit">Buscar</button>
      </form>
      {error && <p className='text-red-600'>{error}</p>}
    </header>

    <main className="flex justify-center w-screen p-10 ">
      {
        loading ? <p>Cargando...</p> : <Movies movies={movies} />
      }
    </main>
    </div>
  )
}

export default App
