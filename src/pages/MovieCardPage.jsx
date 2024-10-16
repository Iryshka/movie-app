import { useLocation } from "react-router-dom";
import movieData from "../data/movieData.jsx";
import CommonButton from "../components/ui/CommonButton.jsx";

function MovieCardPage() {
  const location = useLocation();
  const { movieId } = location.state || {};

  const movie = movieData.find((movie) => movie.id === movieId);

  if (!movie) {
    return <div>No movie data available</div>;
  }

  console.log(movieId);

  return (
    <div
      className="movie-card-page"
      style={{
        backgroundImage: `
      linear-gradient(to bottom, rgba(119, 41, 222, 0.3), rgba(0, 0, 0, 0.89) 40%), 
      url(${movie.image})`,
      }}
    >
      <main className="movie-card-page__main-info">
        <h3 className="movie-card-page__title">{movie.title}</h3>
        <div className="movie-card-page__details">
          <span>{movie.duration}</span>
          <span>{movie.director}</span>
        </div>
        <p className="movie-card-page__genre">{movie.genre}</p>
        <p className="movie-card-page__genre__synopsis">{movie.synopsis}</p>
        <CommonButton>Trailer</CommonButton>
      </main>
    </div>
  );
}

export default MovieCardPage;
