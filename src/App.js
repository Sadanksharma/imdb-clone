import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from './pages/home/home';
import Movie from './pages/movieDetail/movie';

import MovieList from './component/movieList/movieList';
import Header from './component/header/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home />}/>
          <Route path="movie/:id" element={<Movie />}/>
          <Route path="movies/:type" element={<MovieList />}/>
          <Route path="/*" element={<h1>Error Page</h1>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;