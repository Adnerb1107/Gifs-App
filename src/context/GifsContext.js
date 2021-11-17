import { createContext, useState } from "react";
// creamos el contexto
const Context = createContext({})
// creamos el provider
export function GifsContextProvider({children}){
    const [gifs, setGifs] = useState([])
    return <Context.Provider value={{gifs, setGifs}}>
        {children}
    </Context.Provider>
}

export default Context;