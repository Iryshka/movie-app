import CarouselSwiper from "../components/CarouselSwiper.jsx";
import user from "../assets/images/user/user.jpg";
import settings from "../assets/images/user/settings.svg";

import ActiveSlider from "../components/ui/ActiveSlider.jsx";

import SideBar from "../components/ui/SideBar.jsx";
import { useState } from "react";

function UserPage() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  function toggleSidebar() {
    setIsSidebarVisible((prevState) => !prevState);
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
        <div onClick={toggleSidebar} className="user__settings">
          <img src={settings} alt="" className="user__settings-img" />
        </div>
      </header>
      {isSidebarVisible && <SideBar />}
      <div className="user__carousel">
        <CarouselSwiper />
      </div>
      <ActiveSlider title="Recommendation" />
      <ActiveSlider title="Upcoming" />
    </div>
  );
}

export default UserPage;
