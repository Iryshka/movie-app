import { useState } from "react";
import arrowDown from "../../assets/images/bookingPage/arrow-down.svg";
import locationIcon from "../../assets/images/bookingPage/location.svg";
import movieTheatreLocationList from "../../data/movieTheatreLocationList.js";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function MovieSelect() {
  const [isListVisible, setIsListVisible] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(
    "Select Your Location"
  );

  function toggleMovieSelect() {
    setIsListVisible((prevState) => !prevState);
  }

  function selectLocation(location) {
    setSelectedLocation(location);
    setIsListVisible(false);
  }

  function filteredList() {
    return movieTheatreLocationList.filter(
      (movie) => movie.location !== selectedLocation
    );
  }
  return (
    <div className="movie-select">
      <div onClick={toggleMovieSelect} className="movie-select__wrapper">
        <img className="movie-select__img-location" src={locationIcon} alt="" />
        <div className="movie-select__selected">{selectedLocation}</div>
        <img className="movie-select__img-arrow" src={arrowDown} alt="" />
      </div>

      <CSSTransition
        in={isListVisible}
        timeout={500}
        classNames="my-node"
        unmountOnExit
      >
        <ul className="movie-select__list">
          {filteredList().map((movie) => (
            <li
              className="movie-select__list-item"
              key={movie.id}
              onClick={() => {
                selectLocation(movie.location);
              }}
            >
              {movie.location}
            </li>
          ))}
        </ul>
      </CSSTransition>
    </div>
  );
}

export default MovieSelect;
