import movieData from "../data/movieData.jsx";
import MovieCard from "./ui/MovieCard.jsx";

function MovieCardContainer() {
  return (
    <div className="movie-container">
      {movieData.map((movie) => (
        <MovieCard
          key={movie.id}
          image={movie.image}
          title={movie.title}
          description={movie.description}
        />
      ))}
    </div>
  );
}

export default MovieCardContainer;
