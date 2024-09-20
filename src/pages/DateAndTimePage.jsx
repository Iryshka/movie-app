import MovieSelect from "../components/ui/MovieSelect.jsx";
import movieTheaterLocationsUS from "../data/movieTheatreLocationList.js";
import mapImage from "../assets/images/bookingPage/map.png";
import addressIcon from "../assets/images/bookingPage/address.svg";
import phoneIcon from "../assets/images/bookingPage/phone.svg";
import hoursIcon from "../assets/images/bookingPage/clock.svg";
import DatePicker from "../components/ui/DatePicker.jsx";

function DateAndTimePage() {
  return (
    <div className="time">
      <div className="time__wrapper">
        <div className="time__image">
          <img className="time__img" src={mapImage} alt="" />
        </div>
        <div className="time__info">
          <div className="time__movie-select">
            <MovieSelect />
          </div>

          <div className="time__details">
            <h2 className="time__movie-name">{movieTheaterLocationsUS.name}</h2>

            <div className="time__movie-wrapper time__movie-address-wrapper">
              <img
                src={addressIcon}
                alt=""
                className="time__movie-address-img"
              />
              <h3 className="time__movie-wrapper time__movie-address">
                Movie address
              </h3>
            </div>
            <div className="time__movie-wrapper time__movie-phone-wrapper">
              <img src={phoneIcon} alt="" className="time__movie-phone-img" />
              <h3 className="time__movie__phone">555-7585-3738</h3>
            </div>
            <div className="time__movie-wrapper time__movie-hours-wrapper">
              <img src={hoursIcon} alt="" className="time__movie-hours-img" />
              <h3 className="time__movie-hours">9am-12pm</h3>
            </div>
          </div>
        </div>
      </div>
      <DatePicker />
    </div>
  );
}

export default DateAndTimePage;
