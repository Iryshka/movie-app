import CarouselSwiper from "../components/CarouselSwiper.jsx";
import user from "../assets/images/user/user.jpg";
import notification from "../assets/images/user/notification.svg";
import { useDispatch } from "react-redux";

import MovieCard from "../components/ui/MovieCard.jsx";
import MovieCardContainer from "../components/MovieCardContainer.jsx";
import ActiveSlider from "../components/ui/ActiveSlider.jsx";
import { setAuth } from "../features/auth/authSlice.js";

function UserPage() {
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(setAuth(false));
  }

  return (
    <div className="user">
      <header className="user__header">
        <div className="user__wrapper">
          <div className="user__image">
            <img src={user} alt="user image" className="user__img" />
            <span className="user__status"></span>
          </div>
          <div className="user__info">
            <h3 className="user__title">Hay, Hamster</h3>
            <span className="user__greetings">Good Morning</span>
          </div>
        </div>
        <div className="user__notification">
          <img src={notification} alt="" />
        </div>
      </header>
      <div className="user__carousel">
        <CarouselSwiper />
      </div>
      <button onClick={handleLogout} className="user__logout">
        Log out
      </button>
      <ActiveSlider title="Recommendation" />
      <ActiveSlider title="Upcoming" />
    </div>
  );
}

export default UserPage;
