import { useEffect, useState } from "react";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import Players from "./components/Players/Players";
import Footer from "./components/Footer/Footer";
import { toast } from "react-toastify";

function App() {
  const [hiringPrice, setHiringPrice] = useState(0);
  const [generateCoins, setGenerateCoins] = useState(0);

  const handleGenerateCoins = () => {
    const totalCoins = generateCoins + 500000;
    setGenerateCoins(totalCoins);
    toast.success("Credit Added to your Account");
  };

  const handleHiringPrice = (price) => {
    setHiringPrice(price);
  };

  useEffect(() => {
    if (
      generateCoins != 0 &&
      hiringPrice != 0 &&
      generateCoins >= hiringPrice
    ) {
      setGenerateCoins(generateCoins - hiringPrice);
    }
  }, [hiringPrice]);
  return (
    <>
      <header className="w-11/12 mx-auto">
        <Navbar generateCoins={generateCoins}></Navbar>
        <Banner handleGenerateCoins={handleGenerateCoins}></Banner>
      </header>
      <main className="w-11/12 mx-auto">
        <Players
          hiringPrice={hiringPrice}
          generateCoins={generateCoins}
          handleHiringPrice={handleHiringPrice}
        ></Players>
      </main>
      <Footer></Footer>
    </>
  );
}
export default App;
