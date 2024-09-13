import CurrencyConverter from "./components/currencyconverter/CurrencyConverter";
import Navbar from "./components/navbar/Navbar";
import MainFooter from "./components/mainFooter/MainFooter";
export default function Home() {
  return (
    <>
      <div
        className="min-w-full min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url(/websiteHomePage.jpeg)",
        }}
      >
        <Navbar />
        <CurrencyConverter />
      </div>
      <MainFooter />
    </>
  );
}
