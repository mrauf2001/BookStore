// "use client";

// import { createContext, useContext, useState } from "react";

// // Create the CartContext
// const CartContext = createContext();

// // Cart Provider component to wrap the application
// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (item) => {
//     setCartItems((prevItems) => [...prevItems, item]);
//   };

//   return (
//     <CartContext.Provider value={{ cartItems, setCartItems, addToCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// // Custom hook to use the cart context
// export const useCart = () => useContext(CartContext);



"use client";
import { createContext, useContext, useState } from "react";

// Create the combined context
const AppContext = createContext();

// Combined Provider component to wrap the application
export const AppProvider = ({ children }) => {
  // Cart state
  const [cartItems, setCartItems] = useState([]);

  // Currency Converter state
  const [isCurrencyConverterVisible, setCurrencyConverterVisible] = useState(false);

  // Cart functions
  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  // Currency Converter functions
  const toggleCurrencyConverter = () => {
    setCurrencyConverterVisible((prevState) => !prevState);
  };

  return (
    <AppContext.Provider
      value={{
        cartItems,
        setCartItems,
        addToCart,
        isCurrencyConverterVisible,
        toggleCurrencyConverter,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the combined context
export const useAppContext = () => useContext(AppContext);
