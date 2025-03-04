import { useEffect,useState, useRef } from "react"

export function useSearch () {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current){
      isFirstInput.current = search === ''
      return
    }
    if(search === ''){
      setError('no se puede bucar peliculas vacias')
      return
    }

    if (search.match(/^\d+$/) ){
      setError('No se puede buscar una pelicula con numeros')
      return
    }
      if (search.length < 3){
      setError('La pelicula debe tener al menos 3 caracteres')
      return
    }

    setError(null)
  },[search])

  return { search, updateSearch, error }
}
