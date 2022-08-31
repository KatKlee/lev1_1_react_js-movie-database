import './App.css';
import movies from './movie_data';
import Filmcard from './components/Filmcard';
import { v4 as uuidv4 } from 'uuid';

function App() {
  return (
    <div className="App">
      <h1>Films</h1>
      <div className='Films'>
        {movies.map((elt) =>
          <Filmcard
            key={uuidv4()}
            title={elt.title}
            year={elt.year}
            director={elt.director}
            duration={elt.duration}
            rate={`Rating: ${elt.rate}`}
            genre={elt.genre}
          />
        )}
      </div>

    </div>
  );
}

export default App;
