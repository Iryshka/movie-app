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
import { useNavigate } from "react-router-dom";

function ActiveSlider({ title }) {
  const [movies, setMovies] = useState([]);
  const [width, setWidth] = useState(window.innerWidth);

  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function showMovieCard(movieId) {
    navigate(`/movie-card/${movieId}`, { state: { movieId } });
  }

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
              onClick={() => showMovieCard(movie.id)}
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
