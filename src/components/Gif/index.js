import { Link } from "wouter";

export default function Gif({title, id, url}) {
    return (
        <div>
            <Link to={`/gif/${id}`}>
                <h2>{title}</h2>
                <img key={id} alt={title} src={url} />
            </Link>
        </div>        
    )
}
