import React from 'react'
import { Link } from 'wouter'

export default function Category({name, options}) {
    return (
        <div>
            <h3>{name}</h3>
            {
                options.map(e=><li key={e} ><Link to={`/search/${e}`} >{e}</Link></li>)
            }            
        </div>
    )
}
