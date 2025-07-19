import { FaUserAlt } from "react-icons/fa";
import { FaFlag } from "react-icons/fa6";

const Player = ({ player, handleSelectedPlayers }) => {
  const {
    id,
    img,
    name,
    country,
    player_status,
    left_or_right_hand,
    hiring_price,
    rating,
  } = player;
  return (
    <div className="mt-8">
      <div className="card bg-base-100 shadow-sm">
        <figure className="px-6 pt-6">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="px-6 py-6">
          <div className="flex items-center gap-4 mb-4">
            <FaUserAlt className="text-2xl" />
            <h3 className="text-xl font-semibold">{name}</h3>
          </div>
          <div className="flex item-center justify-between">
            <div className="flex items-center gap-3">
              <FaFlag className="text-xl" />
              <h3 className="text-base font-semibold">{country}</h3>
            </div>
            <div>
              <button className="btn rounded-xl border-none">
                {player_status}
              </button>
            </div>
          </div>
          <hr className="my-4 border-1 border-gray-200" />
          <div className="space-y-4">
            <p className="text-base font-bold">Rating: {rating}</p>
            <div className="flex item-center justify-between">
              <p className="text-base font-bold">Left/Right Hand</p>
              <p>{left_or_right_hand}</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-base font-bold">Price: ${hiring_price}</p>
              <button
                onClick={() => handleSelectedPlayers(id, player)}
                className="btn btn-neutral btn-outline rounded-xl border-1 border-gray-300 font-semibold"
              >
                Choose Player
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
