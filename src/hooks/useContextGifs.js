import { useContext } from "react"
import GifsContext from 'context/GifsContext'
function useContextGifs() {
    return (
        useContext(GifsContext).gifs
    )
}
export {
    useContextGifs
}