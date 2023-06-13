import React, { useContext } from "react";
import images from "../../images";
import "./Navbar.css";
import { AppContext } from "../../AppContext";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

function Navbar() {
  const { condition, setCondition, setMovieName, movieName } =
    useContext(AppContext);
  const [localMovieName, setLocalMovieName] = useState("");

  return (
    <div
      className={
        condition
          ? "navbar section__padding"
          : "navbar__Search-movies section__padding"
      }
    >
      <div className="navbar__items-left_container">
        <div
          className="netflix-logo"
          onClick={() => {
            setCondition((prevCondition) => (prevCondition = true));
            setMovieName("");
          }}
        >
          <img src={images.netflixLogo} alt="" />
        </div>
        <ul className="navbar__items-left">
          <li
            onClick={() => {
              setCondition((prevCondition) => (prevCondition = true));
              setMovieName("");
            }}
          >
            Home
          </li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>Latest</li>
          <li>My List</li>
        </ul>
      </div>

      <div className="navbar__items-right_container">
        <div className="search">
          <FaSearch size={17} className="search__icon" />
          <input
            type="text"
            placeholder="Search movies"
            autoComplete="off"
            id="search__input"
            value={movieName}
            onChange={(e) => {
              setMovieName(e.target.value);
              setCondition(false);
            }}
          />
        </div>
        <div className="netflix-avatar">
          <img src={images.netflixAvatar} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
