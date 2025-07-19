import bannerImage from "../../assets/banner-main.png";
import bannerBgImage from "../../assets/bg-shadow.png";

const Banner = ({ handleGenerateCoins }) => {
  return (
    <div className="w-full bg-[#131313] z-0 rounded-2xl">
      <div
        className="w-full  mx-auto min-h-[500px]  bg-cover bg-center z-10 rounded-2xl"
        style={{
          backgroundImage: `url(${bannerBgImage})`,
        }}
      >
        <div className="flex flex-col items-center  px-10 py-10">
          <div className="max-w-[250px] mb-6 mt-16">
            <img className="w-full" src={bannerImage} alt="" />
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-white mb-4">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h2>
          <h4 className="text-gray-500 text-2xl font-medium mb-6">
            Beyond Boundaries Beyond Limits
          </h4>
          <div className="border border-[#E7FE29] p-1 rounded-2xl">
            <button
              onClick={handleGenerateCoins}
              className="btn bg-[#E7FE29] rounded-2xl border-0"
            >
              Claim Free Credit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
