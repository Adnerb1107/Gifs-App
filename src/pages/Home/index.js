import { useState } from 'react'
import { Link, useLocation } from 'wouter'
import ListOfGifs from 'components/ListOfGifs'
import { useGifs } from 'hooks/useGifs'
import LazyTrending from 'components/TrendingSearches'


export default function Home() {
    const POPULARES=['PERU', 'NADA','FELIZ','PANDA']
    const [keyword, setKeyword] = useState('')
    // rutas con wouter
    const [, pushLocation] = useLocation()
    const {loading , gifs}  = useGifs()
    const handleSubmit =(e)=>{
        e.preventDefault()
        pushLocation(`/search/${keyword}`)
    }
    return (
        <>
            <h1>Los gifs mas populares</h1>
            <form onSubmit={handleSubmit}>
                <input value={keyword} onChange={(e)=> setKeyword(e.target.value)} />
                <button>Buscar Gift</button>
            </form>
            <h3>Ultimos buscados</h3>
            {
                loading? 'Cargando': <ListOfGifs gifs={gifs} />
            }
            <ul>
                {POPULARES.map(pop=>(
                    <li key={pop}>
                        <Link to={`/search/${pop}`} >Gif de {pop}</Link>
                    </li>
                ))}
            </ul>
            <div>
                {/* <TrendingSearches /> */}
                <LazyTrending />
            </div>
        </>
    )
}
// high order component 
//funcion que retorna un componente