import { Inter } from "next/font/google";
import MainFooter from "../components/mainFooter/MainFooter";
import bgImage from '../../public/website-adult-readers-page.jpg'
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <>
      <div>
        <div
          className="sticky min-w-full min-h-screen bg-cover bg-center"
          >
          <Image
          src={bgImage}
          alt="background"
          className="absolute top-0 left-0 object-cover h-full w-full"
        />
          <div>{children}</div>
        </div>
        <MainFooter />
      </div>
    </>
  );
}
