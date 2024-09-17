import { Swiper, SwiperSlide } from "swiper/react";
import saveImage from "../../assets/images/save.svg";

import "swiper/css";
import "swiper/css/pagination";

import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";
import movieData from "../../data/movieData.jsx";
import CommonButton from "./CommonButton.jsx";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard.jsx";

function ActiveSlider({ title }) {
  const [movies, setMovies] = useState([]);
  const [width, setWidth] = useState(window.innerWidth);

  const url = "https://imdb-top-100-movies.p.rapidapi.com/";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "afdff19015msh64e2d070e643ec1p1b82d0jsn7f9a491597b1",
      "x-rapidapi-host": "imdb-top-100-movies.p.rapidapi.com",
    },
  };

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setMovies(result);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    }

    fetchMovies();
  }, []);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="movie-card-slider">
      <div className="movie-card-slider__info">
        <h3 className="movie-card-slider__title">{title}</h3>
        <span className="movie-card-slider__add">View all</span>
      </div>
      <Swiper
        spaceBetween={15}
        slidesPerView={Math.floor(width / 140)}
        freeMode={true}
        modules={[FreeMode]}
        className="swiper-container"
      >
        {movieData.map((movie) => (
          <SwiperSlide key={movie.id}>
            <MovieCard
              image={movie.image}
              title={movie.title}
              description={movie.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ActiveSlider;
