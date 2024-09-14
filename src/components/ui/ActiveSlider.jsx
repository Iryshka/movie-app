import { Swiper, SwiperSlide } from "swiper/react";
import saveImage from "../../assets/images/save.svg";

import "swiper/css";
import "swiper/css/pagination";

import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";
import movieData from "../../data/movieData.jsx";
import CommonButton from "./CommonButton.jsx";
import { useEffect, useState } from "react";

function ActiveSlider({ title }) {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="movie-card">
      <div className="movie-card__info">
        <h3 className="movie-card__title">{title}</h3>
        <span className="movie-card__add">View all</span>
      </div>
      <Swiper
        spaceBetween={55}
        slidesPerView={Math.floor(width / 130)}
        freeMode={true}
        modules={[FreeMode]}
        className="swiper-container"
      >
        {movieData.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div className="movie-card__wrapper">
              <div className="hover14 movie-card__image">
                <div className="movie-card__save-image">
                  <img
                    src={saveImage}
                    alt=""
                    className="movie-card__save-img"
                  />
                </div>
                <figure>
                  <img src={movie.image} alt="" className="movie-card__img" />
                </figure>
              </div>
              <h3 className="movie-card__title">{movie.title}</h3>
              <p className="movie-card__description">{movie.description}</p>
              <CommonButton className="movie-card-button">Book</CommonButton>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ActiveSlider;
