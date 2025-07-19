import { useEffect, useState } from "react";
import Player from "../Player/Player";
import SelectedPlayers from "../SelectedPlayers/SelectedPlayers";
import { toast } from "react-toastify";

const Players = ({ handleHiringPrice, hiringPrice, generateCoins }) => {
  const [isActive, setIsActive] = useState({
    cart: true,
    status: "available-carts",
  });
  const [players, setPlayers] = useState([]);
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const res = await fetch("players.json");
        const data = await res.json();
        setPlayers(data);
      } catch (error) {
        console.error("Error fetching players:", error);
      }
    };
    fetchPlayers(); // call async function
  }, [isActive]);

  const handleIsActiveState = (status) => {
    if (status == "available-carts") {
      setIsActive({
        cart: true,
        status: "available-carts",
      });
    } else {
      setIsActive({
        cart: false,
        status: "selected-carts",
      });
    }
  };

  const handleSelectedPlayers = (id, player) => {
    const isExistPlayer = selectedPlayers.find((p) => p.id == id);
    if (selectedPlayers.length < 5 || selectedPlayers.length == 5) {
      if (isExistPlayer) {
        toast.error("Already Added  Player");
      } else {
        handleHiringPrice(player.hiring_price);
        if (generateCoins > hiringPrice) {
          const newSelectedPlayers = [...selectedPlayers, player];
          setSelectedPlayers(newSelectedPlayers);
          toast.success("Added Player");
        } else {
          toast.error("Not Enough Money");
        }
      }
    } else {
      toast.error("Already Added 6 Players");
    }
  };

  const handleSelectedPlayerDelete = (id) => {
    const remainingPlayers = selectedPlayers.filter((p) => p.id !== id);
    setSelectedPlayers(remainingPlayers);
    toast.warning("Delete Player");
  };

  const handlePlayersSection = () => {
    setIsActive({
      cart: true,
      status: "available-carts",
    });
  };
  return (
    <div className="w-full mt-20 mb-48" id="players-section">
      <div className="flex flex-col gap-5 sm:flex-row items-center justify-between">
        <h2 className="text-3xl font-bold">
          Available Players ({selectedPlayers.length}/6)
        </h2>
        <div className="shadow-sm rounded-xl">
          <button
            onClick={() => handleIsActiveState("available-carts")}
            className={`btn rounded-l-xl rounded-r-none border-0 font-bold ${
              isActive.cart ? "bg-[#E7FE29]" : ""
            }`}
          >
            Available
          </button>
          <button
            onClick={() => handleIsActiveState("selected-carts")}
            className={`btn rounded-r-xl rounded-l-none border-0 ${
              isActive.cart ? "" : "bg-[#E7FE29]"
            }`}
          >
            Selected({selectedPlayers.length})
          </button>
        </div>
      </div>

      <div
        className={
          isActive.cart
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            : "flex flex-col gap-5 mt-10"
        }
      >
        {isActive.cart
          ? players.map((player) => (
              <Player
                key={player.id}
                player={player}
                handleSelectedPlayers={handleSelectedPlayers}
              ></Player>
            ))
          : selectedPlayers.length != 0 &&
            selectedPlayers.map((selectedPlayer) => (
              <SelectedPlayers
                key={selectedPlayer.id}
                selectedPlayer={selectedPlayer}
                handleSelectedPlayerDelete={handleSelectedPlayerDelete}
              ></SelectedPlayers>
            ))}
      </div>
      <div>
        {selectedPlayers.length != 0 && (
          <div className="mt-10">
            <button
              onClick={handlePlayersSection}
              className="btn rounded-xl bg-[#E7FE29] font-bold border-none outline-1 outline-offset-4"
            >
              Add More Player
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Players;
