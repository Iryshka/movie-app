import { default as dayjs } from "dayjs";
import { useEffect, useState } from "react";
import ScrollMenu from "react-horizontal-scroll-menu";

// type Select = number | string | undefined | null;

const DatePicker = () => {
  const [Month, setMonth] = useState([]);
  const [selected, setSelected] = useState();
  const [customDaysFormat, setCustomDaysFormat] = useState("ddd");
  const currentDay = dayjs().format("D");

  const getCurrentWeekDays = () => {
    const weekStart = dayjs().startOf("week");

    const days = [];
    for (let i = 0; i <= 6; i++) {
      days.push(dayjs(weekStart).add(i, "days"));
    }

    return days;
  };

  useEffect(() => {
    setMonth(getCurrentWeekDays());
  }, []);

  const MenuItem = ({ day, number, selected, key }) => {
    return (
      <div
        className={`menu-item dayItem ${selected ? "active" : ""}
        ${currentDay === number ? "today" : null}`}
        key={key}
      >
        <h5 className="day">{day}</h5>
        <span className="number">{number}</span>
      </div>
    );
  };

  const Menu = () =>
    Month.map(() => {
      return (
        <MenuItem
          day={day.format(customDaysFormat)}
          number={day.format("D")}
          key={day.format("D")}
          selected={selected}
        />
      );
    });

  const Arrow = ({ text, className }) => {
    return (
      <div className="arrow-container">
        <div className={className}>{text}</div>
      </div>
    );
  };
  const ArrowLeft = Arrow({ text: "<", className: "button" });
  const ArrowRight = Arrow({ text: ">", className: "button" });

  const onSelect = () => {
    if (key === selected) {
      setSelected(0);
    } else {
      setSelected(key);
    }
  };

  const menu = Menu(selected);

  const handleRadioChange = () => {
    const option = e.currentTarget.value;

    switch (option) {
      case "Su-Sa":
        setCustomDaysFormat("dd");
        break;
      case "Sun-Sat":
        setCustomDaysFormat("ddd");
        break;
      case "Sunday-Saturday":
        setCustomDaysFormat("dddd");
        break;
      default:
        setCustomDaysFormat("ddd");
        break;
    }
  };

  return (
    <div className="format-container">
      <h4 className="format"> Days format </h4>
      <div className="radio">
        <input
          type="radio"
          name="customDay"
          value="Su-Sa"
          onChange={(e) => handleRadioChange(e)}
        />
        <label>Su-Sa</label>
        <input
          type="radio"
          name="customDay"
          value="Sun-Sat"
          defaultChecked
          onChange={(e) => handleRadioChange(e)}
        />
        <label>Sun-Sat</label>
        <input
          type="radio"
          name="customDay"
          value="Sunday-Saturday"
          onChange={(e) => handleRadioChange(e)}
        />
        <label>Sunday-Saturday</label>
      </div>

      <ScrollMenu
        data={menu}
        arrowLeft={ArrowLeft}
        arrowRight={ArrowRight}
        selected={selected}
        onSelect={onSelect}
        scrollToSelected={true}
      />
    </div>
  );
};

export default DatePicker;
