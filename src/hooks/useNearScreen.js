import {useState, useEffect,useRef} from 'react'
export default function useNearScreen({distance = '100px'}){
    const [show, setShow] = useState(false)    
    const ref= useRef()
    useEffect(()=>{
        let observer
        console.log("aqui")
        const onChange = (entries,observer) =>{            
            const el= entries[0]
            if(el.isIntersecting){
                setShow(true)
                observer.disconnect()
            }    
        }
        // importacion dinamica
        // retornar un valor dentro de una promesa
        Promise.resolve(
           IntersectionObserver || import('intersection-observer')
        ).then(()=>{
                observer= new IntersectionObserver(onChange, {
                rootMargin:'100px'
            })
            observer.observe(ref.current)
        })
        return ()=>observer && observer.disconnect()
    })
    return {show, ref };
}
