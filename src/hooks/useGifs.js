import {useState,useEffect, useContext} from "react"
import getGifs from "services/getGifs"
import GifsContext from "context/GifsContext";
function useGifs({keyword}={keyword:null}){

    const [loading, setLoading]= useState(false);
    
    const {gifs, setGifs} = useContext(GifsContext);

    useEffect(() => {
        setLoading(true)
        const keywordTyped= keyword || localStorage.getItem('lastSearch')
        getGifs({keyword: keywordTyped }).then(gif => {
            setGifs(gif)
            setLoading(false)
            localStorage.setItem("lastSearch", keywordTyped)
            })     
    }, [keyword, setGifs])
    
    return{
        loading, 
        gifs
    }
}
export {
    useGifs
}