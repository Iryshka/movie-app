import CommonButton from "./CommonButton.jsx";
import saveIcon from "../../assets/images/save.svg";

function MovieCard({ image, title, description }) {
  return (
    <div className="hover14 movie-card">
      <div className="movie-card__image">
        <div className="movie-card__save-image">
          <img src={saveIcon} alt="" className="movie-card__save-img" />
        </div>
        <figure>
          <img src={image} alt="" className="movie-card__img" />
        </figure>
      </div>
      <h3 className="movie-card__title">{title}</h3>
      <p className="movie-card__genre">{description}</p>
      <CommonButton>Book</CommonButton>
    </div>
  );
}

export default MovieCard;
