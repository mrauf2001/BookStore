import { Inter } from "next/font/google";
import MainFooter from "../components/mainFooter/MainFooter";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <>
      <div>
      <div
        className="min-w-full min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url(/websiteAdultReadersPage.jpg)",
        }}
      >
          <div>{children}</div>
        </div>
        <MainFooter />
      </div>
    </>
  );
}
