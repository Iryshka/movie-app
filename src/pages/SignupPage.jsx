import { Link } from "react-router-dom";
import LoginInput from "../components/ui/LoginInput.jsx";
import CommonButton from "../components/ui/CommonButton.jsx";
import logo from "../assets/images/logo-4.svg";

function SignupPage() {
  return (
    <div className="bg-[#1e293b] text-gray-200 h-screen w-full flex flex-col justify-center items-center overflow-hidden">
      <img className="logo-signup" src={logo} alt="" />
      <form action="">
        <label htmlFor="text">Your Name:</label>
        <LoginInput type="text" id="text" placeholder="Enter Your Name" />
        <label htmlFor="phone">Your Phone Number:</label>
        <LoginInput
          type="tel"
          id="phone"
          placeholder="Enter Your Phone Number"
        />
        <label htmlFor="email">Your Email:</label>
        <LoginInput type="email" id="email" placeholder="Enter Your Email" />
        <label htmlFor="password">Your Password:</label>
        <LoginInput
          type="password"
          id="password"
          placeholder="Enter Your Password"
        />
        <label htmlFor="password">Your Password:</label>
        <LoginInput
          type="password"
          id="password"
          placeholder="Repeat Your Password"
        />
        <CommonButton className="button-signup-style">Sign Up</CommonButton>
      </form>

      <div>
        <span className="text-sm mb-2 block">
          Already have an account?{" "}
          <Link className="link" to="/login">
            Enter here
          </Link>
        </span>
      </div>
    </div>
  );
}

export default SignupPage;
