import Navbar from "../Navbar";
import Footer from "../Footer";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode; className?: string }) => (
  <div className="flex flex-col h-screen">
    <Navbar />
    {children}
    <Footer />
  </div>
);

export default Layout;
