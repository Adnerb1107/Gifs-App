import Gif from 'components/Gif'
import'./styles.css'
export default function ListOfGifs(props) {
    const {gifs}  = props;   
    return (        
        <div className="ListOfGifs">
            {
                gifs.map(({title, id, url})=>{
                    return <Gif title={title} url={url} key={id} id={id} />
                })
            }
            
        </div>
    )
}
