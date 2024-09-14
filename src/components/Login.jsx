import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "../features/auth/authSlice.js";
import { Link, Navigate } from "react-router-dom";
import dogLogin from "../assets/images/dog-login.png";
import LoginInput from "./ui/LoginInput.jsx";
import CommonButton from "./ui/CommonButton.jsx";
import CheckBox from "./ui/CheckBox.jsx";
import { nanoid } from "nanoid";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const storedUser = localStorage.getItem("user-id");
  const user = storedUser || nanoid();

  const userId = useSelector((state) => state.userAuth.userId);
  console.log(userId);

  useEffect(() => {
    if (storedUser) {
      dispatch(setAuth(true));
      navigate("/");
    }
  }, [dispatch, navigate, storedUser]);

  const handleClick = (event) => {
    event.preventDefault();
    dispatch(setAuth({ isAuth: true, userId: storedUser }));
    localStorage.setItem("user-id", JSON.stringify(userId));
    navigate("/");
  };

  return (
    <div className="bg-[#1e293b] h-screen w-full flex flex-col justify-center items-center overflow-hidden">
      <div className="flex flex-col justify-center items-center">
        <button
          type="button"
          className="w-64 text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-2xl text-sm px-9 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2"
        >
          <svg
            className="w-4 h-4 me-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 8 19"
          >
            <path
              fill-rule="evenodd"
              d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
              clip-rule="evenodd"
            />
          </svg>
          Sign in with Facebook
        </button>
        <button
          type="button"
          className="w-64 text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-2xl text-sm px-12 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 me-2 mb-2"
        >
          <svg
            className="w-4 h-4 me-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 17"
          >
            <path
              fill-rule="evenodd"
              d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
              clip-rule="evenodd"
            />
          </svg>
          Sign in with Twitter
        </button>
        <button
          type="button"
          className="w-64 text-white bg-[#334155] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-2xl text-sm px-12 py-2.5 mb-5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2"
        >
          <svg
            className="w-4 h-4 me-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 19"
          >
            <path
              fill-rule="evenodd"
              d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
              clip-rule="evenodd"
            />
          </svg>
          Sign in with Google
        </button>
      </div>
      <form className="flex flex-col justify-center items-center" action="#">
        <LoginInput type="email" id="email" placeholder="Enter Your Email" />
        <LoginInput
          type="password"
          id="password"
          placeholder="Enter your Password"
        />
        <CheckBox />

        <CommonButton onClick={handleClick} className="button-login-style">
          Login
        </CommonButton>
      </form>
      <div>
        <span className="text-gray-100 text-sm mb-2 block">
          Don't have an account? <Link to="/profile">Sign up now</Link>
        </span>
        <span className="text-gray-100 text-sm block">
          <a href="">Forget Password?</a>
        </span>
      </div>
      <img className="login__img" src={dogLogin} alt="" />
    </div>
  );
}

export default Login;
