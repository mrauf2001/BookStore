"use client";

import React from "react";
import Image from "next/image";
import { useCart } from "../components/context/CartContext"; // Import the cart context
import Image1 from "../../public/Image1.jpeg";
import Navbar from "../components/navbar/Navbar";
import MainFooter from "../components/mainFooter/MainFooter";
const GardenBook = () => {
  const { addToCart } = useCart(); // Access the addToCart function from the context

  const handleAddToCart = () => {
    const bookItem = {
      id: 1,
      title: "Out There in a Garden",
      author: "T. Lee Tomas",
      price: 19.99,
    };
    addToCart(bookItem);
  };

  return (
    <>
      <div
        className="w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: "url(/websiteYoungReadersPage.jpg)",
        }}
      >
        <Navbar />
        <div className="flex flex-col md:flex-row min-h-screen justify-center items-center px-5 md:px-20 py-10">
          <div className="w-full md:w-1/2 flex-shrink-0 mb-10 md:mb-0 flex justify-center">
            <Image
              src={Image1}
              alt="Out There in a Garden"
              width={300}
              height={300}
              objectFit="cover"
              className="md:w-100 md:ml-32"
            />
          </div>
          <div className="w-full md:w-1/2 p-4 md:p-8 flex flex-col justify-center">
            <h1 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              Out There in a Garden
            </h1>
            <p className="text-base md:text-lg mb-4 text-white">
              by T. Lee Tomas
            </p>
            <div className="flex items-center mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    className="w-5 h-5 md:w-6 md:h-6 text-yellow-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 576 512"
                  >
                    <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                  </svg>
                ))}
              </div>
              <span className="ml-2 text-white">5</span>
            </div>
            <p className="text-sm md:text-base text-white mb-4">
              This book introduces children to the garden that belongs to the
              Garden Family in the series. Children will explore various sites
              within the garden. Through experience, adults know that sometimes
              things are beautiful and innocent, but at other times,
              there&apos;s danger afoot...
            </p>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md">
                ← Back
              </button>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded-md"
                onClick={handleAddToCart} // Call the function when clicked
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <MainFooter />
    </>
  );
};

export default GardenBook;
