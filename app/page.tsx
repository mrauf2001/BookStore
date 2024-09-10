import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import bgimg from "../public/website-home-page.jpg";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <div className="bg-opacity-30 relative w-full h-screen bg-cover bg-center">
        <Image
          src={bgimg}
          alt="background"
          className="absolute top-0 left-0 object-cover h-full w-full"
        />
        <Navbar />
        <Footer />
      </div>
    </>
  );
}
