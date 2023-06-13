import React, { useEffect, useState } from "react";
import axios from "../../axios";
import { API_KEY, imageUrl } from "../../constants/constants";
import { AiOutlinePlus } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState("");
  useEffect(() => {
    axios
      .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        const random = () => {
          const randNum = Math.floor(
            Math.random() * response.data.results.length
          );
          setMovie(response.data.results[randNum]);
        };
        random();
      });
  }, []);

  return (
    <div id="banner-wrapper">
      <div
        className="banner"
        style={{ backgroundImage: `url(${imageUrl + movie.backdrop_path})` }}
      >
        <div className="movie__details section__padding-banner">
          <div className="movie__name">
            <h1 className="movie__name-headtext">
              {movie.title ? movie.title : movie.name}
            </h1>
          </div>

          <p className="description ">{movie.overview}</p>
          <div className="movie__details-buttons">
            <div className="button1">
              <button className="custom__Button">
                <BsFillPlayFill size={25} /> Play
              </button>
            </div>
            <div className="button2">
              <button className="custom__Button">
                <AiOutlinePlus size={26} /> My List
              </button>
            </div>
          </div>
        </div>
        <div className="fade"></div>
      </div>
    </div>
  );
}

export default Banner;
