import { useState } from "react";

function Seat({ className, seatNumber, bookSeat, seatsBooked }) {
  const [seatColor, setSeatColor] = useState("#1c191b");

  function handleSeatClick() {
    // Allow seat color change only if fewer than 6 seats are booked
    if (seatsBooked.length < 6 || seatColor === "#d3433a") {
      setSeatColor((prevColor) =>
        prevColor === "#1c191b" ? "#d3433a" : "#1c191b"
      );

      bookSeat(seatNumber);
    } else {
      console.log("Cannot book more than 6 seats");
    }
    bookSeat(seatNumber);
  }

  return (
    <div className="seat">
      <svg
        onClick={handleSeatClick}
        className={className}
        fill={seatColor}
        width="800px"
        height="800px"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9 4C7.346 4 6 5.346 6 7L6 8.5722656C6.762 9.0352656 7.3802812 9.7543906 7.7382812 10.650391L8.6796875 13L15.318359 13L16.3125 10.517578C16.6515 9.6715781 17.254 8.9995469 18 8.5605469L18 7C18 5.346 16.654 4 15 4L9 4 z M 20.027344 10C19.208344 10 18.471969 10.498766 18.167969 11.259766L16.671875 15L7.3222656 15L5.8808594 11.392578C5.5888594 10.662578 4.9421563 10.083766 4.1601562 10.009766C3.7601562 9.9717656 3.3715781 10.049234 3.0175781 10.240234C2.1005781 10.732234 1.7731563 11.899234 2.1601562 12.865234L3.859375 17.115234C4.2333486 18.048528 5.0447325 18.71092 6 18.921875L6 20 A 1.0001 1.0001 0 1 0 8 20L8 19L16 19L16 20 A 1.0001 1.0001 0 1 0 18 20L18 18.919922C18.952361 18.707004 19.760684 18.044829 20.132812 17.113281L21.841797 12.841797C22.211797 11.915797 21.919453 10.806969 21.064453 10.292969C20.744453 10.099969 20.392344 10 20.027344 10 z" />
      </svg>
      <span className="seat-number">{seatNumber}</span>
    </div>
  );
}

export default Seat;
