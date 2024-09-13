import Image from "next/image";
import { FC } from "react";
import Link from "next/link";
import Navbar from "../components/navbar/Navbar";
import MainFooter from "../components/mainFooter/MainFooter";
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
    title: "The Garden's Secret",
    author: "Alice W. Moon",
    description:
      "A mystery that takes place in an enchanted garden, revealing long-hidden secrets.",
    image: "/Book2.jpeg",
  },
  {
    id: 3,
    title: "Whispers in the Trees",
    author: "Jonathan Breeze",
    description:
      "A thrilling adventure that takes readers deep into the heart of the forest.",
    image: "/Book3.jpeg",
  },
  {
    id: 4,
    title: "BedTime Bee And Girl-No And Boy-No",
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

const YoungReaders: FC = () => {
  return (
    <>
      <div
        className="min-w-full min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url(/websiteYoungReadersPage.jpeg)",
        }}
      >
        <Navbar />
        <CurrencyConverter />
        <section className="py-12">
          <div className="flex flex-col items-center">
            <div className="flex flex-wrap justify-center gap-4">
              {books.map((book) => (
                <Link key={book.id} href={`/books/${book.id}`}>
                  <div className="transition-transform duration-300 transform hover:scale-105">
                    <Image
                      src={book.image}
                      alt={book.title}
                      width={200}
                      height={200}
                      className="object-cover"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
      <MainFooter />
    </>
  );
};

export default YoungReaders;
