import useNearScreen from 'hooks/useNearScreen'
import { lazy, Suspense} from 'react'

// cargar de forma lazy
// es una promesa
const TrendingSearches = lazy(
    //import dinamico
    () => import("./TrendingSearches")
)

// lazy loading
export default function LazyTrending() {
    const { show, ref } = useNearScreen({ distance: '200px' })
    return <div ref={ref} >
        <Suspense fallback={null}>
            {show ? <TrendingSearches /> : null}
        </Suspense>
    </div>
}