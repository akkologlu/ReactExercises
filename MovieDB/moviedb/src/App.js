import './App.css';
import axios from 'axios';
import {useState,useEffect} from "react";
import searcMovies from "./api";

function App() {

  const [movies, setMovies] = useState([]);



  const fetchData = async (term) =>{
    const fetchedMovies = await searcMovies(term);
    setMovies(fetchedMovies);
  };



 





  
  return (
    <div className="App">
      {movies.length > 0 ? (
        <>
          <h1>{movies[0].original_title}</h1>
          <img
            src={`http://image.tmdb.org/t/p/w500/${movies[0].poster_path}`}
            alt=""
          />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}


export default App;


