import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "swiper/css/autoplay";

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function imgUrl() {
  const number = rand(1, 3);
  return `/image-${number}.jpg`;
}

function CarouselSwiper({ slideCount = 3 }) {
  const slides = Array.from({ length: slideCount }).map((_, index) => (
    <SwiperSlide key={index}>
      <img className="img" src={imgUrl()} alt="" />
    </SwiperSlide>
  ));
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      navigation
      autoplay={{ delay: 1500 }}
      pagination={{ clickable: true }}
    >
      {slides}
    </Swiper>
  );
}

export default CarouselSwiper;
