import { Link } from "react-router-dom";
import ostrich from "../assets/images/not-found.png";

function NotFoundPage() {
  return (
    <div className="not-found">
      <div className="not-found__wrapper">
        <div className="not-found__image">
          <img src={ostrich} alt="" className="not-found__img" />
        </div>
        <div className="not-found__info">
          <h3 className="not-found__title">
            <h3 className="not-found__404">404</h3>
          </h3>
          <p className="not-found__description">
            "You’ve stepped off-screen. Let’s get you back to the blockbuster!"
          </p>
        </div>
        <Link className="not-found__link" to="/">
          Home
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
