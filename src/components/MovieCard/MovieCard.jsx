import React from "react";
import { useState, useEffect } from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import YouTube from "react-youtube";
import { imageUrl, API_KEY } from "../../constants/constants";
import "./MovieCard.css";
import axios from "../../axios";
import { useRef } from "react";

function MovieCard({ title, isSmall, url }) {
  const scrollRef = useRef(null);

  const [posters, setPosters] = useState([]);
  const [urlId, setUrlId] = useState("");

  const handleMovie = (id) => {
    axios
      .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        if (response.data.results.length !== 0) {
          setUrlId(response.data.results[0]);
        } else {
          console.log("no trailers");
        }
      });
  };

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 340;
    } else {
      current.scrollLeft += 340;
    }
  };

  useEffect(() => {
    axios.get(url).then((response) => {
      setPosters(response.data.results);
    });
  }, []);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 0,
      origin: window.location.origin 
    },
  };

  return (
    <div className="MovieCard section__padding-movieCard">
      <div className="netflix__Originals">
        <h2 className="section__Title">{title}</h2>
      </div>
      <div className="movie-poster_wrapper">
        <div className="movie-poster_container" ref={scrollRef}>
          {posters.map((poster) => (
            <div key={poster.id} className={isSmall ? "movie__poster-small" : "movie__Poster"}>
              <img
                onClick={() => handleMovie(poster.id)}
                src={`${imageUrl}${isSmall ? poster.backdrop_path:poster.poster_path }`}
                alt=""
              />
            </div>
          ))}
        </div>
        <div className="arrows">
          <BsArrowLeftShort
            className="arrow-icon"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="arrow-icon"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
      {urlId && <YouTube opts={opts} videoId={urlId.key} iframeClassName='video__player'/>}
    </div>
  );
}

export default MovieCard;
