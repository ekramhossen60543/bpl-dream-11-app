import brandLogo from "../../assets/logo.png";
const Navbar = () => {
  return (
    <div className="w-10/12 mx-auto flex justify-between items-center font-sora mt-12 mb-7">
      <div className="w-[100]">
        <img className="w-full" src={brandLogo} alt="" />
      </div>

      <div className="flex items-center gap-5">
        <ul className="flex items-center gap-5 text-gray-500 font-light">
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
        <button className="btn font-semibold">0 Coin 🪙</button>
      </div>
    </div>
  );
};

export default Navbar;
