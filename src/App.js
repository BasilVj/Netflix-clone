import React, { useState, useEffect } from "react";
import "./App.css";
import { Navbar, Banner, MovieCard, SearchResults } from "./components";
import { AppContext } from "./AppContext";
import axios from "./axios";
import {
  originals,
  action,
  trending,
  comedy,
  horror,
  documentary,
  romance,
  movielist
} from "./urls";


function App() {
  const [condition, setCondition] = useState(true);
  const [movieName, setMovieName] = useState("");
  const [movieArray, setMovieArray] = useState([]);
  

  return (
    <div className="app ">
      <AppContext.Provider value={{ condition,setCondition, setMovieName,movieName }}>
        {condition ? (
          <>
            <Navbar />
            <Banner />
            <MovieCard url={originals} title="Netflix Originals" />
            <MovieCard url={trending} title="Trending Now" isSmall />
            <MovieCard url={action} title="Action" isSmall />
  
            <MovieCard url={comedy} title="Comedy" isSmall />
            <MovieCard url={horror} title="Horror" isSmall />
            <MovieCard url={documentary} title="Documentary" isSmall />
            <MovieCard url={romance} title="Romance" isSmall />
          </>
        ) : (
          <>
            <Navbar/>
            <SearchResults movieName={movieName} />
          </>
        )}
      </AppContext.Provider>
    </div>
  );
}

export default App;
