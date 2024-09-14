import CommonButton from "./CommonButton.jsx";
import CardImage from "../../assets/images/card-1.jpeg";

function MovieCard({ image, title, description }) {
  return (
    <div className="hover14 columng movie-card">
      <div className="movie-card__image">
        <figure>
          <img src={image} alt="" className="movie-card__img" />
        </figure>
      </div>
      <h3 className="movie-card__title">{title}</h3>
      <p className="movie-card__description">{description}</p>
      <CommonButton>Book</CommonButton>
    </div>
  );
}

export default MovieCard;
