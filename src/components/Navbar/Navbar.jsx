import brandLogo from "../../assets/logo.png";
import { GiTwoCoins } from "react-icons/gi";
const Navbar = ({ generateCoins }) => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between gap-10 md:gap-0 mt-12 mb-7 ">
      <div className="w-[100px]">
        <img className="w-full" src={brandLogo} alt="" />
      </div>

      <div className="flex items-center gap-5">
        <ul className="flex items-center gap-5 text-gray-500 font-medium">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Fixture</a>
          </li>
          <li>
            <a href="#">Teams</a>
          </li>
          <li>
            <a href="#">Schedules</a>
          </li>
        </ul>
        <button className="btn font-bold">
          {generateCoins} Coin{" "}
          <GiTwoCoins className="text-yellow-500 text-3xl" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
