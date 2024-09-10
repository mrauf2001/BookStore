import Image from "next/image";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import bgimg from "./photos/websiteHomePage.jpg";
export default function Home() {
  return (
    <>
      <div
        className="min-w-full min-h-screen bg-cover bg-center"
        // style={{
        //   backgroundImage: "url(/websiteHomePage.jpg)",
        // }}
      >
        <Image
          src={bgimg}
          alt="Background"
          className="w-full h-screen object-cover absolute right-0 left-0"
        />
        <Navbar />
        <Footer />
      </div>
    </>
  );
}
