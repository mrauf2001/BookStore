"use client";

import Link from "next/link";
import { useAppContext } from "../../components/context/CartContext";

const Navbar = () => {
  const { cartItems } = useAppContext();
  return (
    <div>
      <nav className="w-full text-blue-700 py-4 px-4 md:px-8 sticky top-0">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row text-center gap-6 md:gap-8 py-4 md:py-10">
            <Link href="/">
              <span className="flex items-center">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 576 512"
                  className="w-8 h-10 md:w-12 md:h-14 mr-2"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path>
                </svg>
                <span className="font-bold hover:cursor-pointer text-[24px] md:text-[50px]  leading-[28px] md:leading-[36px] font-grinched text-blue-700">
                  Home
                </span>
              </span>
            </Link>
            <Link href="/adultreader">
              <span className="flex items-center">
                <span className="font-bold hover:cursor-pointer leading-[28px] md:leading-[36px] font-grinched text-[24px] md:text-[50px]  text-blue-700">
                  AdultReader
                </span>
              </span>
            </Link>
            <Link href="/youngreader">
              <span className="flex items-center">
                <span className="font-bold hover:cursor-pointer leading-[28px] md:leading-[36px] font-grinched text-[24px] md:text-[50px]  text-blue-700">
                  YoungReader
                </span>
              </span>
            </Link>
            <Link href="promoBooks/pricing">
              <span className="flex items-center">
                <span className="font-bold hover:cursor-pointer leading-[28px] md:leading-[36px] font-grinched text-[24px] md:text-[50px] text-blue-700">
                  PromoBooks
                </span>
              </span>
            </Link>
          </div>
          <div className="pr-0 md:pr-15 flex gap-6 md:gap-6">
            <Link href="/cart">
              <span className="flex items-center">
                <div className="flex ">
                  {" "}
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    className="w-6 h-8 md:w-12 md:h-14 pt-4 hover:cursor-pointer"
                    viewBox="0 0 576 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M504.717 320H211.572l6.545 32h268.418c15.401 0 26.816 14.301 23.403 29.319l-5.517 24.276C523.112 414.668 536 433.828 536 456c0 31.202-25.519 56.444-56.824 55.994-29.823-.429-54.35-24.631-55.155-54.447-.44-16.287 6.085-31.049 16.803-41.548H231.176C241.553 426.165 248 440.326 248 456c0 31.813-26.528 57.431-58.67 55.938-28.54-1.325-51.751-24.385-53.251-52.917-1.158-22.034 10.436-41.455 28.051-51.586L93.883 64H24C10.745 64 0 53.255 0 40V24C0 10.745 10.745 0 24 0h102.529c11.401 0 21.228 8.021 23.513 19.19L159.208 64H551.99c15.401 0 26.816 14.301 23.403 29.319l-47.273 208C525.637 312.246 515.923 320 504.717 320zM408 168h-48v-40c0-8.837-7.163-16-16-16h-16c-8.837 0-16 7.163-16 16v40h-48c-8.837 0-16 7.163-16 16v16c0 8.837 7.163 16 16 16h48v40c0 8.837 7.163 16 16 16h16c8.837 0 16-7.163 16-16v-40h48c8.837 0 16-7.163 16-16v-16c0-8.837-7.163-16-16-16z"></path>
                  </svg>
                  <div>
                    <sup className=" md:relative :right-10  text-blue-300 md:text-2xl">
                      [{cartItems.length}]
                    </sup>
                  </div>
                </div>
                <span className="font-bold hover:cursor-pointer font-grinched text-[24px] md:text-[45px] text-blue-700 leading-[28px] md:leading-[36px]">
                  Cart
                </span>
              </span>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

<div className="mb-8">
  <Link href="/promoBooks">
    <button className="bg-blue-500 md:text-5xl text-white md:w-[88] md:h-24 py-4 px-4 rounded-lg mx-2 hover:bg-green-600 transition duration-500">
      Promo Books
    </button>
  </Link>
</div>;
