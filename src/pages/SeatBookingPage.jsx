import arrowIcon from "../assets/images/bookingPage/left-arrow.svg";
import Seat from "../components/ui/Seat.jsx";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setBooking } from "../features/booking/bookingSlice.js";
import CommonButton from "../components/ui/CommonButton.jsx";

function SeatBookingPage({ className }) {
  const seats = useSelector((state) => state.userBooking.bookedSeats);
  const dispatch = useDispatch();
  const seatsPerRow = 4;
  const navigate = useNavigate();
  const [price, setPrice] = useState(0);
  const seatPrice = 10;

  function generateSeatNumber(rowLetter, seatIndex) {
    return `${rowLetter}${seatIndex + 1}`;
  }

  function bookSeat(seatNumber) {
    const isSeatBooked = seats.includes(seatNumber);
    let updatedSeats;

    if (isSeatBooked) {
      updatedSeats = seats.filter((seat) => seat !== seatNumber);
    } else {
      updatedSeats = [...seats, seatNumber];
    }

    dispatch(setBooking({ bookedSeats: updatedSeats }));
  }

  useEffect(() => {
    const totalBookedSeats = seats.length;
    if (totalBookedSeats <= 6) {
      setPrice(totalBookedSeats * seatPrice);
    } else {
      setPrice(6 * seatPrice);
    }
  }, [seats]);

  function goBack() {
    navigate(-1);
  }

  function displayBookedSeats(seats) {
    if (seats.length > 6) {
      return `${seats.slice(0, 6).join(", ")}`;
    }
    return seats.join(", ");
  }

  const rowLetters = ["A", "B", "C", "D", "E", "F", "G"];

  return (
    <div className="seat-booking">
      <div className="seat-booking__flex-title">
        <img
          onClick={goBack}
          className="seat-booking__img"
          src={arrowIcon}
          alt="Go back"
        />
        <h3 className="seat-booking__title">Your seat</h3>
      </div>

      <div className="screen">
        <p className="screen-title">screen</p>
        <div className="gradient">
          <svg
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 670 386.5"
            preserveAspectRatio="none"
          >
            <radialGradient
              id="gradient"
              cx="336.83"
              cy="284.39"
              r="473.49"
              gradientTransform="translate(0 -398)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stop-color="#fff" stop-opacity=".97"></stop>
              <stop offset=".04" stop-color="#fff" stop-opacity=".91"></stop>
              <stop offset=".25" stop-color="#fff" stop-opacity=".59"></stop>
              <stop offset=".44" stop-color="#fff" stop-opacity=".34"></stop>
              <stop offset=".6" stop-color="#fff" stop-opacity=".15"></stop>
              <stop offset=".79" stop-color="#fff" stop-opacity="0"></stop>
            </radialGradient>
            <path
              className=" fill-[url(#gradient)]"
              d="M0 386.5s73.5-49.2 335-49.2 335 49.2 335 49.2V45.8S584.5 4.2 333.3 4.2C102.6 4.3 0 45.8 0 45.8v340.7z"
            ></path>
            <path
              className="fill-white"
              d="M0 48.5S97.8 7 335 7c238.6 0 335 41.5 335 41.5v-5.4S578.3 1.5 335 1.5 0 43.2 0 43.2v5.3z"
            ></path>
          </svg>
        </div>
      </div>
      <div className="seat-booking__flex">
        <div className="seat-booking__first-row">
          {rowLetters.map((rowLetter) =>
            Array.from({ length: seatsPerRow }).map((_, seatIndex) => (
              <Seat
                bookSeat={bookSeat}
                key={`${rowLetter}${seatIndex}`}
                className="seat-booking__img"
                seatNumber={generateSeatNumber(rowLetter, seatIndex)}
                seatsBooked={seats}
              />
            ))
          )}
        </div>

        <div className="seat-booking__second-row">
          {rowLetters.map((rowLetter) =>
            Array.from({ length: seatsPerRow }).map((_, seatIndex) => (
              <Seat
                bookSeat={bookSeat}
                key={`${rowLetter}${seatIndex + seatsPerRow}`}
                className="seat-booking__img"
                seatNumber={generateSeatNumber(
                  rowLetter,
                  seatIndex + seatsPerRow
                )}
                seatsBooked={seats}
              />
            ))
          )}
        </div>
      </div>

      <div className="seat-booking-selected">
        Your seats:{" "}
        <span className="seat-booking-span">{displayBookedSeats(seats)}</span>
      </div>

      <div className="seat-booking-selected">
        Total price: <span className="seat-booking-span">${price}</span>
      </div>
      <CommonButton className="seat-booking__button">Book</CommonButton>
    </div>
  );
}

export default SeatBookingPage;
