import MovieSelect from "../components/ui/MovieSelect.jsx";
import movieTheaterLocationsUS from "../data/movieTheatreLocationList.js";
import mapImage from "../assets/images/bookingPage/map.png";
import addressIcon from "../assets/images/bookingPage/address.svg";
import phoneIcon from "../assets/images/bookingPage/phone.svg";
import hoursIcon from "../assets/images/bookingPage/clock.svg";
import DatePicker from "../components/ui/DatePicker.jsx";
import { useState } from "react";
import TimePicker from "../components/ui/TimePicker.jsx";
import CommonButton from "../components/ui/CommonButton.jsx";
import { useNavigate } from "react-router-dom";
import { setBooking } from "../features/booking/bookingSlice.js";
import { useDispatch, useSelector } from "react-redux";

function DateAndTimePage() {
  const dispatch = useDispatch();
  const date = useSelector((state) => state.userBooking.bookingDate);
  const location = useSelector((state) => state.userBooking.location);

  const navigate = useNavigate();

  const selectedMovie = movieTheaterLocationsUS.find(
    (movie) => movie.id === (location.id ?? 1)
  );

  function navigateToSeatBooking() {
    navigate("./seatbooking");
  }
  return (
    <div className="time">
      <h3 className="time__title">Date and Time</h3>
      <div className="time__flex">
        <div className="time__wrapper">
          <div className="time__image">
            <img className="time__img" src={mapImage} alt="" />
          </div>
          <div className="time__info">
            <div className="time__movie-select">
              <MovieSelect />
            </div>
            {selectedMovie && (
              <div className="time__details">
                <h3 className="time__movie-name">{selectedMovie.name}</h3>

                <div className="time__movie-wrapper time__movie-address-wrapper">
                  <img
                    src={addressIcon}
                    alt=""
                    className="time__movie-address-img"
                  />
                  <h3 className="time__movie-address">
                    {selectedMovie.address}
                  </h3>
                </div>
                <div className="time__movie-wrapper time__movie-phone-wrapper">
                  <img
                    src={phoneIcon}
                    alt=""
                    className="time__movie-phone-img"
                  />
                  <h3 className="time__movie-phone">{selectedMovie.phone}</h3>
                </div>
                <div className="time__movie-wrapper time__movie-hours-wrapper">
                  <img
                    src={hoursIcon}
                    alt=""
                    className="time__movie-hours-img"
                  />
                  <h3 className="time__movie-hours">
                    {selectedMovie.openingHours}
                  </h3>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="time__date-picker">
          <DatePicker />
        </div>
        <div className="time__time-picker">
          <TimePicker ticketType="Standard" />
        </div>
        <div className="time__time-picker">
          <TimePicker ticketType="VIP" />
        </div>
        <CommonButton onClick={navigateToSeatBooking} className="time__button">
          NEXT
        </CommonButton>
      </div>
    </div>
  );
}

export default DateAndTimePage;
