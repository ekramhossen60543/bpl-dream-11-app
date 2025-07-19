const SelectedPlayers = ({ selectedPlayer, handleSelectedPlayerDelete }) => {
  const { id, img, name, left_or_right_hand } = selectedPlayer;
  return (
    <div className="flex justify-between items-center border-1 border-gray-200 rounded-xl p-1 shadow-sm">
      <div className="flex items-center gap-6">
        <div className="max-w-[100px]">
          <img className="w-full rounded-xl" src={img} alt="" />
        </div>
        <div>
          <h2 className="font-bold">{name}</h2>
          <small className="text-gray-500">{left_or_right_hand}</small>
        </div>
      </div>
      <div>
        <button
          onClick={() => handleSelectedPlayerDelete(id)}
          className="btn bg-red-400 rounded-2xl"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default SelectedPlayers;
