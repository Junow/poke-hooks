import {useState, useEffect} from 'react'
import {Pokemon} from './types/pokemon'
import fetchApi from './fetch'

const usePokemon = (name: string | number) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [data, setData] = useState<Pokemon | null>(null)

  useEffect(() => {
    if(!name) return
    setIsLoading(true)
    fetchApi<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(data=> {
        setData(data)
        setIsLoading(false)
      })
      .catch(e => {
        setData(null)
        setIsLoading(false)
      })
  }, [name])


  return {data, isLoading}
}

export default usePokemon
