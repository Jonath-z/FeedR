import Navbar from "./Navbar";
import Footer from "./Footer";
import { ReactNode } from "react";

const Layout = ({ children, className }: { children: ReactNode; className?: string }) => (
  <div>
    <Navbar />
    {children}
    <Footer />
  </div>
);

export default Layout;
