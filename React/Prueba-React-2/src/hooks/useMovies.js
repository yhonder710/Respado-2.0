import { useRef, useState, useMemo } from 'react'
import { searchMovies } from '../services/movies.js'

export function useMovies ({ search, sort }) {
  const [movies, setMovies] = useState([])
  const [loanding, setLoanding] = useState(false)
  const [error, setError] = useState(null)
  const previoSearch = useRef(search)


  const getMovies = useMemo(() => {
    return async ({search}) => {
      if (search === previoSearch.current) return
      try {
        setLoanding(true)
        setError(null)
        const newMovies = await searchMovies({ search })
        setMovies(newMovies)
      } catch (e) {
        setError(e.message)
      } finally {
        setLoanding(false)
      }
    }
  },[])


  const sortedMovies = useMemo(() => {
    return  sort
    ? [...movies].sort((a, b) => a.year.localeCompare(b.year))
    : movies
  },[sort,movies])

  return { movies: sortedMovies,  getMovies, loanding, error}
}
