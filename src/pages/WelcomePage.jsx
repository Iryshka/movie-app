import { useEffect, useState } from "react";
import Intro from "../components/Intro.jsx";
import Carousel from "../components/Carousel.jsx";
import Spinner from "../components/ui/Spinner.jsx";
import data from "../data/carouselData.js";
import UserPage from "./UserPage.jsx";

import DateAndTimePage from "./DateAndTimePage.jsx";
import SeatBookingPage from "./SeatBookingPage.jsx";

function WelcomePage() {
  const [isIntroVisible, setIntroVisible] = useState(true);
  const [isSpinnerVisible, setSpinnerVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIntroVisible(false);
      setSpinnerVisible(true);
    }, 2000); // Hide Intro in 2 seconds and show spinner

    const spinnerTimeout = setTimeout(() => {
      setSpinnerVisible(false);
    }, 3000); // Show the spinner for 1 second

    return () => {
      clearTimeout(timer);
      clearTimeout(spinnerTimeout);
    };
  }, []);

  return (
    <>
      {/*<SeatBookingPage />*/}

      <DateAndTimePage />
      {/*{isIntroVisible ? (*/}
      {/*  <Intro />*/}
      {/*) : isSpinnerVisible ? (*/}
      {/*  <Spinner />*/}
      {/*) : (*/}
      {/*  <Carousel data={data.slides} />*/}
      {/*)}*/}
    </>
  );
}

export default WelcomePage;
