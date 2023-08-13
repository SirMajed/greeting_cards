import { FC } from "react";
import Navbar from "./Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
interface Props {
  children?: JSX.Element | JSX.Element[];
}
const Layout: FC<Props> = (props: Props) => {
  return (
    <>
      <div className="flex flex-col h-screen">
        <ToastContainer />
        <Navbar />
        <main className="flex-1 overflow-y-auto ">{props.children}</main>
        <footer className="text-sm py-3 lg:py-4 bg-white text-center text-gray-800 font-neoSans border">
          <Link  href={'https://www.linkedin.com/in/alhasenmajed/'}>Majed A. Alhasin</Link>
        </footer>
      </div>
    </>
  );
};
export default Layout;
