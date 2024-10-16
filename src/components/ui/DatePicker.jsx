import dayjs from "dayjs";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import { useEffect, useState } from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { useDispatch, useSelector } from "react-redux";
import { setBooking } from "../../features/booking/bookingSlice.js";
import leftArrow from "../../assets/images/datePicker/left-arrow.svg";
import rightArrow from "../../assets/images/datePicker/right-arrow.svg";

dayjs.extend(isSameOrAfter);

const DatePicker = () => {
  const dispatch = useDispatch();
  const date = useSelector((state) => state.userBooking.bookingDate);
  const [month, setMonth] = useState([]);
  const [weekStart, setWeekStart] = useState(
    dayjs().startOf("week").toString()
  );
  const [selected, setSelected] = useState();
  const [customDaysFormat, setCustomDaysFormat] = useState("ddd");
  const currentDay = dayjs().format("D");

  function getCurrentWeekDays() {
    const days = [];
    for (let i = 0; i <= 6; i++) {
      days.push(dayjs(weekStart).add(i, "days"));
    }

    return days;
  }

  useEffect(() => {
    setMonth(getCurrentWeekDays());
  }, []);

  useEffect(() => {
    setMonth(getCurrentWeekDays());
  }, [weekStart]);
  const MenuItem = ({ day, number, onClick, isSelected }) => {
    const isToday = number === currentDay;
    return (
      <div
        className={`menu-item dayItem ${
          isSelected ? "date-picker-selected" : ""
        } ${isToday ? "date-picker-active" : ""}`}
        onClick={onClick}
      >
        <h5 className="day">{day}</h5>
        <span className="number">{number}</span>
      </div>
    );
  };

  function ArrowLeft() {
    const isAtCurrentWeek = dayjs(weekStart).isSame(
      dayjs().startOf("week"),
      "week"
    );

    return (
      <button
        disabled={isAtCurrentWeek}
        onClick={() =>
          setWeekStart(
            dayjs(weekStart).startOf("week").subtract(1, "week").toString()
          )
        }
      >
        <img className="date-picker-arrow" src={leftArrow} alt="Previous" />
      </button>
    );
  }

  function ArrowRight() {
    const maxFutureWeek = dayjs().startOf("week").add(3, "week"); // 3 weeks from the current week
    const isAtMaxFutureWeek = dayjs(weekStart).isSameOrAfter(
      maxFutureWeek,
      "week"
    );

    return (
      <button
        disabled={isAtMaxFutureWeek} // Disable based on your future navigation limit
        onClick={() =>
          setWeekStart(
            dayjs(weekStart).startOf("week").add(1, "week").toString()
          )
        }
      >
        <img className="date-picker-arrow" src={rightArrow} alt="Next" />
      </button>
    );
  }

  function pickDate(dayNumber) {
    dispatch(setBooking({ bookingDate: dayNumber }));
    setSelected(dayNumber);
  }

  return (
    <ScrollMenu LeftArrow={ArrowLeft} RightArrow={ArrowRight}>
      <div className="scroll-menu">
        {month.map((day) => {
          const dayNumber = day.format("D");
          return (
            <MenuItem
              onClick={() => pickDate(dayNumber)}
              day={day.format(customDaysFormat)}
              number={dayNumber}
              key={dayNumber}
              isSelected={selected === dayNumber}
            />
          );
        })}
      </div>
    </ScrollMenu>
  );
};

export default DatePicker;
