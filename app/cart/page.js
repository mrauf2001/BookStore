"use client";
import React from "react";
import { useAppContext, useCart } from "../components/context/CartContext"; // Import the cart context
import ContactForm from "../components/form/Contact";
import Navbar from "../components/navbar/Navbar";
import CurrencyConverter from "../components/currencyconverter/CurrencyConverter";

const CartPage = () => {
  const { cartItems, setCartItems } = useAppContext(); // Access cart items and setter function

  // Function to remove item from the cart
  const removeFromCart = (id) => {
    // Filter out the item by its unique id, leaving the rest intact
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems); // Update cart items with the filtered list
  };

  return (
    <>
      <Navbar />
      <CurrencyConverter />
      <div className="min-h-screen p-4 lg:p-10 flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/2 w-full">
          <h1 className="text-3xl font-bold mb-6 text-blue-300">Your Cart</h1>

          {cartItems.length === 0 ? (
            <p className="text-blue-100">Your cart is empty.</p>
          ) : (
            <div className="grid grid-cols-1 gap-4">
              {cartItems.map((item) => (
                <div
                  key={item.id} // Ensure each item has a unique key
                  className="flex flex-col justify-between bg-white p-4 rounded-lg shadow-md"
                >
                  <div>
                    <h2 className="text-xl font-semibold">{item.title}</h2>
                    <p className="text-gray-600">by {item.author}</p>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)} // Remove only the clicked item
                    className="bg-red-500 text-white px-4 py-2 rounded-md mt-4"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="lg:w-1/2 w-full">
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default CartPage;
