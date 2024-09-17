import userIcon from "../../assets/images/user/user.jpg";
import phoneIcon from "../../assets/images/sidebar/phone.svg";
import emailIcon from "../../assets/images/sidebar/email.svg";
import arrowIcon from "../../assets/images/sidebar/arrow-right.svg";
import CommonButton from "./CommonButton.jsx";
import { useDispatch } from "react-redux";
import { setAuth } from "../../features/auth/authSlice.js";
import { forwardRef } from "react";

function SideBar(props, ref) {
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(setAuth({ isAuth: false, userId: null }));
    localStorage.removeItem("user-id");
  }
  return (
    <div className="sidebar" ref={ref}>
      <h2 className="sidebar__title">Profile</h2>
      <div className="sidebar__info">
        <div className="sidebar__user-image">
          <img src={userIcon} alt="" className="sidebar__user-img" />
        </div>
        <h3 className="sidebar__user-name">Hamster</h3>
      </div>
      <div className="sidebar__phone">
        <img src={phoneIcon} alt="" className="sidebar__phone-img" />
        <p className="sidebar__phone-info">+0539538989</p>
      </div>
      <div className="sidebar__email">
        <img src={emailIcon} alt="" className="sidebar__email-img" />
        <p className="sidebar__email-info">hamster@gmail.com</p>
      </div>

      <nav className="sidebar__nav">
        <ul className="sidebar__list">
          <li className="sidebar__list-item">
            <a href="">Personal Info</a>
            <img src={arrowIcon} alt="" />
          </li>
          <li className="sidebar__list-item">
            <a href="">Payment Methods</a>
            <img src={arrowIcon} alt="" />
          </li>
          <li className="sidebar__list-item">
            <a href="">Favorite Movies</a>
            <img src={arrowIcon} alt="" />
          </li>
          <li className="sidebar__list-item">
            <a href="">Language</a>
            <img src={arrowIcon} alt="" />
          </li>
        </ul>
      </nav>
      <CommonButton onClick={handleLogout} className="sidebar__logout">
        Log out
      </CommonButton>
    </div>
  );
}

export default forwardRef(SideBar);
