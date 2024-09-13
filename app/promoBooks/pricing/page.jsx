import Navbar from "../../components/navbar/Navbar";
import MainFooter from "../../components/mainFooter/MainFooter";
import CurrencyConverter from "@/app/components/currencyconverter/CurrencyConverter";

const PriceCards = () => {
  const options = [
    { id: 1, title: "Signed/Dated", price: "$65.00 USD", size: "large" },
    { id: 2, title: "Signed/Undated", price: "$60.00 USD", size: "medium" },
    { id: 3, title: "Initial/Dated", price: "$55.00 USD", size: "small" },
  ];

  return (
    <>
      <div
        className="min-w-full min-h-screen bg-cover bg-center bg-blue-300"
        style={{
          backgroundImage: "url(/promoBooksPageBackground.jpeg)", // Optional background image
        }}
      >
        <Navbar />
        <CurrencyConverter />
        <section className="py-12">
          <div className="flex flex-wrap justify-center gap-8">
            {options.map((option) => (
              <div
                key={option.id}
                className={`${
                  option.size === "large"
                    ? "w-72 h-96"
                    : option.size === "medium"
                    ? "w-64 h-80"
                    : "w-56 h-72"
                } p-4 bg-white shadow-lg rounded-lg hover:scale-105 transition-transform duration-300`}
              >
                <h3 className="text-xl font-bold text-center mb-2">{option.title}</h3>
                <p className="text-center text-gray-600 mb-4">{option.price}</p>
                <button className="block bg-blue-500 hover:bg-green-600 text-white text-center w-full py-2 rounded">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
      <MainFooter />
    </>
  );
};

export default PriceCards;
