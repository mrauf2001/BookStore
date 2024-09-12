import CurrencyConverter from "./components/currencyconverter/CurrencyConverter";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
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
        <Footer />
      </div>
    </>
  );
}
