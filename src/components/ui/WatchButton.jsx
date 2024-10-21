import { Link } from "react-router-dom";
import playButton from "../../assets/images/movieCardPage/play-button.svg";

function WatchButton({ children }) {
  return (
    <div className="watch-button">
      <Link to="#" className="watch-button__link">
        {children}
      </Link>
      <img src={playButton} alt="Play button" className="watch-button__img" />
    </div>
  );
}

export default WatchButton;
