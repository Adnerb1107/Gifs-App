import React from 'react'
import ListOfGifs from 'components/ListOfGifs'
import {useGifs} from "hooks/useGifs"

export default  function SearchResults(props) {
    const {keyword} = props.params
    const {loading, gifs}  = useGifs({keyword:keyword})
    
    return (
        <>
            <h3>{decodeURI(keyword)}</h3>
            { loading ? 'Cargando .... ': <ListOfGifs gifs={gifs}/>}            
        </>    
    )
}
