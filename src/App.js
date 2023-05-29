import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import MovieList from './components/header/moviesList/MovieList';
import MovieDetail from './pages/movieDetail/MovieDetail';
import SearchBody from './components/search/SearchBody';
import { useState } from 'react';


function App() {
  const [allData,setAllData]=useState([]);
  return (
    <div className="App">
     <Router>
     <Header allData={allData} setAllData={setAllData}/>
      <Routes>
        <Route index element={<Home/>}></Route>
        <Route path="movie/:id" element={<MovieDetail/>}></Route>
        <Route path="movies/:type" element={<MovieList/>}></Route>
        <Route path="/*" element={<h1>error page</h1>}></Route>
        <Route path="/search" element={<SearchBody allData={allData}/>}></Route>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
