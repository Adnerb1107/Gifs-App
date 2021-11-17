import Gif from 'components/Gif'
import { useContextGifs } from 'hooks/useContextGifs'
function Detail({params}) {
    //ya se tiene la informacion de useContextgifs en useGifs
    const gifs= useContextGifs()
    const gif= gifs.find(searched =>searched.id===params.id)
    return (
        <div>
            <h1>Gif con id : {params.id}</h1>
            <Gif {...gif} />
            
        </div>
    )
}

export default Detail
