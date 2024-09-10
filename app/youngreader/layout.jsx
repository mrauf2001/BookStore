import { Inter } from "next/font/google";
import MainFooter from "../components/mainFooter/MainFooter";
// import bgImage from '../../public/website-adult-readers-page.jpg'

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <>
      <div>
        <div
          className="sticky min-w-full min-h-screen bg-cover bg-center"
          style={{
            // backgroundImage: `url(${bgImage.src})`,
            backgroundImage: "url(/website-adult-readers-page.jpg)",
          }}
        >
          <div>{children}</div>
        </div>
        <MainFooter />
      </div>
    </>
  );
}
