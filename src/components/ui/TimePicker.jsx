import { useState } from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { useDispatch, useSelector } from "react-redux";
import { setBooking } from "../../features/booking/bookingSlice.js";
import leftArrow from "../../assets/images/datePicker/left-arrow.svg";
import rightArrow from "../../assets/images/datePicker/right-arrow.svg";
import movieTheaterLocationsUS from "../../data/movieTheatreLocationList.js";
import dayjs from "dayjs";

function TimePicker({ ticketType }) {
  const dispatch = useDispatch();
  const time = useSelector((state) => state.userBooking.bookingTime);
  const [selectedTime, setSelectedTime] = useState(null);
  const [startIndex, setStartIndex] = useState(0); // To manage the index of visible time slots

  const SLOTS_PER_PAGE = 5;

  const movieTimes = movieTheaterLocationsUS[0].movieTime;

  const visibleTimes = movieTimes.slice(
    startIndex,
    startIndex + SLOTS_PER_PAGE
  );

  const MenuItem = ({ time, onClick, isSelected, isDisabled }) => {
    return (
      <div className="time-picker">
        <div
          className={`time-picker__wrapper ${
            isDisabled ? "time-picker-disabled" : ""
          }`}
          onClick={!isDisabled ? onClick : null}
        >
          <h5
            className={`time-picker__time ${
              isSelected && !isDisabled ? "time-picker-selected" : ""
            }`}
          >
            {time}
          </h5>
        </div>
      </div>
    );
  };

  function ArrowLeft() {
    return (
      <button
        disabled={startIndex === 0}
        onClick={() =>
          setStartIndex((prev) => Math.max(prev - SLOTS_PER_PAGE, 0))
        }
      >
        <img className="date-picker-arrow" src={leftArrow} alt="Previous" />
      </button>
    );
  }

  function ArrowRight() {
    return (
      <button
        disabled={startIndex + SLOTS_PER_PAGE >= movieTimes.length}
        onClick={() =>
          setStartIndex((prev) =>
            Math.min(prev + SLOTS_PER_PAGE, movieTimes.length - SLOTS_PER_PAGE)
          )
        }
      >
        <img className="date-picker-arrow" src={rightArrow} alt="Next" />
      </button>
    );
  }

  function handleSelectTime(time) {
    const TIME_NOW = dayjs().format("HH:mm");
    if (time < TIME_NOW) {
      return;
    }
    dispatch(setBooking({ bookingTime: time }));
    setSelectedTime(time);
  }

  return (
    <>
      <h4 className="scroll-menu__title">{ticketType}</h4>
      <ScrollMenu LeftArrow={ArrowLeft} RightArrow={ArrowRight}>
        <div className="scroll-menu">
          {visibleTimes.map((time, index) => (
            <MenuItem
              key={index}
              time={time}
              onClick={() => handleSelectTime(time)}
              isSelected={selectedTime === time}
            />
          ))}
        </div>
      </ScrollMenu>
    </>
  );
}

export default TimePicker;
