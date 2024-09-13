"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import Navbar from "../../components/navbar/Navbar";
import MainFooter from "../../components/mainFooter/MainFooter";
import { useAppContext } from "../../components/context/CartContext"; // Import the useCart hook
import CurrencyConverter from "@/app/components/currencyconverter/CurrencyConverter";

const books = [
  {
    id: 1,
    title: "Out There in a Garden",
    author: "T. Lee Tomas",
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

const BookDetails = () => {
  const { id } = useParams(); // Extract dynamic route params
  const bookId = parseInt(id as string, 10); // Convert the id to a number
  const { addToCart } = useAppContext(); // Use the useCart hook to get the addToCart function

  // Find the book using the id from params
  const book = books.find((book) => book.id === bookId);

  if (!book) {
    return <p>Book not found!</p>; // Fallback if no book is found
  }

  // Handle adding the book to the cart
  const handleAddToCart = () => {
    addToCart(book); // Add the current book to the cart
    alert(`${book.title} added to the cart!`);
  };

  return (
    <>
      <Navbar />
      <CurrencyConverter />
      <div className="min-h-screen flex flex-col items-center justify-center py-8 bg-gray-100">
        <div className="max-w-3xl bg-white shadow-md rounded-lg p-6">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/3">
              <Image
                src={book.image}
                alt={book.title}
                width={300}
                height={300}
                className="object-cover"
              />
            </div>
            <div className="w-full md:w-2/3 md:pl-8">
              <h1 className="text-2xl font-bold mb-4">{book.title}</h1>
              <p className="text-lg text-gray-600 mb-2">
                Author: {book.author}
              </p>
              <p className="text-gray-800 mb-6">{book.description}</p>
              <div className="flex space-x-4">
                <button
                  className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md"
                  onClick={() => window.history.back()} // Alternative to router.back()
                >
                  ← Back
                </button>
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded-md"
                  onClick={handleAddToCart} // Add book to cart when clicked
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MainFooter />
    </>
  );
};

export default BookDetails;
