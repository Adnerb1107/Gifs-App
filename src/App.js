import './App.css'
import {Link, Route} from "wouter"
import Home from "./pages/Home"
import SearchResult from "./pages/SearchResults"
import Detail from "./pages/Detail"
import {GifsContextProvider} from "./context/GifsContext"

function App() {
  
  return (

    <div className="App">
      <section className="App-content">
        <Link to="/">Inicio</Link>
        <GifsContextProvider>
          <Route path="/" component={Home} />
          <Route path="/search/:keyword" component={SearchResult} />
          <Route path="/gif/:id" component={Detail} />
        </GifsContextProvider>
        
      </section> 
    </div>
  );
}

export default App;
/*
<Link to="/gif/peru">Gif de peru</Link>
        <Link to="/gif/madrid">Gif de madrid</Link>
        <Link to="/gif/colombia" >Gif de colombia</Link>
 */