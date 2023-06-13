import React, { useState, useEffect } from "react";
import axios from "../../axios";
import { AppContext } from "../../AppContext";
import { imageUrl, API_KEY } from "../../constants/constants";
import "./SearchResults.css";


function SearchResults({ movieName }) {
  const [films, setFilms] = useState([]);
  


  useEffect(() => {
    const searchMovies = async () => {
      try {
        const response = await axios.get(
          `search/movie?api_key=${API_KEY}&language=en-US&query=${movieName}`
        );
        setFilms(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    searchMovies();
  }, [movieName]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 0,
      origin: window.location.origin,
    },
  };

  return (
    <div className="search__Results_wrapper">
      <div className="search__Results-poster_container">
        {films.map(
          (film) =>
            film.poster_path && (
              <div key={film.id} className="search__Results-poster">
                <img
                  src={`${imageUrl + film.poster_path}`}
                  alt=""
                />
              </div>
            )
        )}
        
      </div>
    </div>
  );
}

export default SearchResults;
