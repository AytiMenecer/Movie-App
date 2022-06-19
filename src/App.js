import './App.css';
import Navi from './Components/navigation/Navi';
import { Routes, Route } from 'react-router-dom';
import MoviesLists from './Components/movies/MoviesLists';
import SingleMoviePage from './Components/movies/SingleMoviePage';
import AddMovie from './Components/movies/AddMovie'

function App() {
    return ( 
      <div className='container'>
        <Navi />
        <Routes>
          <Route path="/" element={<MoviesLists />} />
          <Route path="/SingleMoviePage" element={<SingleMoviePage />} />
          <Route path="/AddMovie" element={<AddMovie />} />
        </Routes>
      </div>
    );
}

export default App;