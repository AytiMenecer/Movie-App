import React from "react";
import { useSelector } from "react-redux";
import { selectedAllMovies } from "./moviesSlice";
import { AiFillStar } from "react-icons/ai";
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const MoviesLists = () => {
  const movieData = useSelector(selectedAllMovies);
  let renderedMovie;

  if (movieData.length === 0) {
    renderedMovie = <h3>No Movies yet</h3>;
  } else {
    renderedMovie = movieData.map((movie) => {
      return (
        <div className="card" key={movie.id}>
          <div className="card2">
              <div className="card-img"></div>
              <div className="card-info">
                
                <p className="text-title">{movie.name}</p>
                <p className="imdb"> <AiFillStar className="star" /> {movie.imdb}</p>
                <p className="card-category imdb">Category : {movie.category}</p>
              </div>
              <div className="card-footer">
                <p className="text-language">{movie.language}</p>
                <span className="favorite-button"><AiFillStar /> <p>Add Favorite</p></span>
              {/* <div className="card-button">!</div> */}
              </div>
          </div>
        </div>
      );
    });
  }

  return <div className="movie-list-container">{renderedMovie}</div>;
};

export default MoviesLists;
