import {useState, useEffect} from 'react'
import getTrendingTerms from "services/getTrendingTerms"
import Category from "components/Category"

export default function TrendingSearches() {
    const [trends,setTrends] = useState([])
    useEffect(() => {
        getTrendingTerms()
            .then(setTrends)
    }, [])
    return (
        <Category options={trends} name='Tendencias' />
    )
}
