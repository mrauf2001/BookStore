import Image from "next/image";
import { FC } from "react";
import Image1 from "../../public/placepic1.jpeg";
import Image2 from "../../public/placepic2.jpeg";
import Image3 from "../../public/placepic3.jpeg";
import Image4 from "../../public/placepic4.jpeg";
import Image5 from "../../public/placepic5.jpeg";
import Link from "next/link";
import Navbar from "../components/navbar/Navbar";

const YoungReaders: FC = () => {
  return (
    <>
      <Navbar />
      <section className="py-12">
        <div className="flex flex-col items-center">
          {/* Buttons */}
          <div className="mb-8">
            <p className="bg-gray-200 inline text-gray-800 py-2 px-4 rounded-lg mx-2 hover:bg-gray-300 transition duration-300">
              No Promo
            </p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mx-2 hover:bg-green-600 transition duration-300">
              Promo Books
            </button>
          </div>

          {/* Images */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/garden">
              <div className="transition-transform duration-300 transform hover:scale-105 ">
                <Image
                  src={Image1}
                  alt="Image 1"
                  width={400}
                  height={400}
                  className="object-cover"
                />
              </div>
            </Link>
            <Link href="/garden">
              <div className="transition-transform duration-300 transform hover:scale-105">
                <Image
                  src={Image2}
                  alt="Image 2"
                  width={400}
                  height={400}
                  className="object-cover"
                />
              </div>
            </Link>
            <Link href="/garden">
              <div className="transition-transform duration-300 transform hover:scale-105">
                <Image
                  src={Image3}
                  alt="Image3"
                  width={400}
                  height={400}
                  className="object-cover"
                />
              </div>
            </Link>
            <Link href="/garden">
              <div className="transition-transform duration-300 transform hover:scale-105">
                <Image
                  src={Image4}
                  alt="Image 4"
                  width={400}
                  height={400}
                  className="object-cover"
                />
              </div>
            </Link>
            <Link href="/garden">
              <div className="transition-transform duration-300 transform hover:scale-105 ">
                <Image
                  src={Image5}
                  alt="Image 5"
                  width={400}
                  height={400}
                  className="object-cover"
                />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default YoungReaders;
