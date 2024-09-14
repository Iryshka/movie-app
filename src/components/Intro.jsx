import logo from "../assets/images/logo-4.svg";

function Intro() {
  return (
    <div className="intro">
      <div className="intro__info">
        <img className="intro__logo" src={logo} alt="" />
        <h1 className="intro__title">MovieMunch</h1>
      </div>
    </div>
  );
}

export default Intro;
