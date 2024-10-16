import arrowIcon from "../assets/images/bookingPage/left-arrow.svg";
import Seat from "../components/ui/Seat.jsx";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function SeatBooking({ className }) {
  const [bookedSeats, setBookedSeats] = useState([]);
  const seatsPerRow = 4;

  const navigate = useNavigate();

  function generateSeatNumber(rowLetter, seatIndex) {
    return `${rowLetter}${seatIndex + 1}`;
  }

  function bookSeat(seatNumber) {
    setBookedSeats((prevSeats) => {
      if (prevSeats.includes(seatNumber)) {
        return prevSeats.filter((seat) => seat !== seatNumber);
      } else {
        return [...prevSeats, seatNumber];
      }
    });
  }

  useEffect(() => {
    console.log("Booked seats: ", bookedSeats);
  }, [bookedSeats]);

  function goBack() {
    navigate(-1);
  }

  const rowLetters = ["A", "B", "C", "D", "E", "F", "G"];

  return (
    <div className="seat-booking">
      <div className="seat-booking__flex-title">
        <img
          onClick={goBack}
          className="seat-booking__img"
          src={arrowIcon}
          alt=""
        />
        <h3 className="seat-booking__title">Your seat</h3>
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
              />
            ))
          )}
        </div>

        <div className="seat-booking__second-row">
          {rowLetters.map((rowLetter) =>
            Array.from({ length: seatsPerRow }).map((_, seatIndex) => (
              <Seat
                bookSeat={bookSeat}
                key={`${rowLetter}${seatIndex}`}
                className="seat-booking__img"
                seatNumber={generateSeatNumber(
                  rowLetter,
                  seatIndex + seatsPerRow
                )}
              />
            ))
          )}
        </div>
      </div>
      <div className="seat-booking-selected">Your seat {bookedSeats}</div>
    </div>
  );
}

export default SeatBooking;
