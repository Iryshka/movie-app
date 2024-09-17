import CommonButton from "./ui/CommonButton.jsx";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Carousel({ data }) {
  const navigate = useNavigate();
  const [slide, setSlide] = useState(0);
  const isPreviewSeen = localStorage.getItem("isPreviewSeen");

  function nextSlide() {
    console.log("i'm clicked");
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  }

  function skipPreview() {
    localStorage.setItem("isPreviewSeen", "true");
    navigate("/login");
  }

  function previousSlide() {
    setSlide(slide - 1);
  }

  useEffect(() => {
    if (isPreviewSeen) {
      navigate("/login");
    }
  }, [isPreviewSeen]);
  return (
    <div className="carousel">
      <div className="carousel__wrapper">
        {data.map((item, index) => {
          return (
            <div
              className={
                slide === index
                  ? "carousel__slide"
                  : "carousel__slide carousel__slide-hidden"
              }
            >
              <div className="carousel__image">
                <img
                  className="carousel__img"
                  src={item.src}
                  alt="item.alt"
                  key={index}
                />
              </div>
              <h2 className="carousel__title">{item.title}</h2>
              <p className="carousel__description">{item.description}</p>
            </div>
          );
        })}
      </div>
      <span className="carousel__indicators">
        {data.map((_, index) => {
          return (
            <button
              className={
                slide === index
                  ? "carousel__indicator carousel__indicator-active"
                  : "carousel__indicator carousel__indicator-inactive"
              }
              key={index}
              onClick={null}
            ></button>
          );
        })}
      </span>
      <div className="carousel__buttons">
        <Link to="/login">
          <CommonButton onClick={skipPreview} name="skip">
            skip
          </CommonButton>
        </Link>
        <CommonButton onClick={nextSlide}>next</CommonButton>
      </div>
    </div>
  );
}

export default Carousel;
