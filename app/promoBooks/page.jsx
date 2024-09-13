import Image from "next/image";
import Navbar from "../components/navbar/Navbar";
import MainFooter from "../components/mainFooter/MainFooter";
import Link from "next/link";
import CurrencyConverter from "../components/currencyconverter/CurrencyConverter";

const books = [
  {
    id: 1,
    title: "Out There in a Garden",
    author: "T.Lee Thomas",
    description:
      '"Out There in a Garden" is a serene journey into the heart of nature. It captures the beauty of plants, flowers, and wildlife, revealing the peace and magic found in every corner of the garden. Ideal for nature lovers seeking tranquility.',
    image: "/Book1.jpeg",
  },
  {
    id: 2,
    title: "Bedtime Bee and the Cat",
    author: "T.Lee Thomas",
    description:
      "A mystery that takes place in an enchanted garden, revealing long-hidden secrets.",
    image: "/Book2.jpeg",
  },
  {
    id: 3,
    title: "Bedtime Bee and the Birthday Bear",
    author: "T.Lee Thomas",
    description:
      "A thrilling adventure that takes readers deep into the heart of the forest.",
    image: "/Book3.jpeg",
  },
  {
    id: 4,
    title: `Bedtime Bee and Girl-No and Boy-No`,
    author: "T.Lee Thomas",
    description:
      "A thrilling adventure that takes readers deep into the heart of the forest.",
    image: "/Book4.jpeg",
  },
  {
    id: 5,
    title: "Candy Is Not Always Good",
    author: "T.Lee Thomas",
    description:
      "A thrilling adventure that takes readers deep into the heart of the forest.",
    image: "/Book5.jpeg",
  },
];

const PromoBooks = () => {
  return (
    <div
      className="min-w-full min-h-screen bg-cover bg-center sm:grid-cols-2"
      style={{
        backgroundImage: "url(/websiteHomePage.jpeg)",
        className : 'object-cover'
        // Optional background image for promo books page
      }}
    >
      <Navbar />
      <CurrencyConverter />
      <section className="py-12">
        <div className="flex flex-wrap justify-center gap-4">
          {books.map((book) => (
             <Link key={book.id} href={`/promoBooks/pricing`} passHref>
            <div key={book.id} className="transition-transform duration-300 transform hover:scale-105 w-52 text-white">
              <Image
                src={book.image}
                alt={book.title}
                width={200}
                height={200}
                className="object-cover"
              />
              <h3 className="text-lg font-semibold text-center mt-2 text-wrap">{book.title}</h3>
              <p className="text-center text-sm text-white">{book.author}</p>
            </div>
            </Link>
          ))}
        </div>
      </section>
      <MainFooter />
    </div>
  );
};

export default PromoBooks;
