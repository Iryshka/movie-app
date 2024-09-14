import { ThreeDots } from "react-loader-spinner";

function Spinner() {
  return (
    <div className="spinner">
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#d3433a"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
}

export default Spinner;
