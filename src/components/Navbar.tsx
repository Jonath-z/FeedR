import { FaBars } from "react-icons/fa6";
import Container from "./Container";
import { DynamicWidget } from "@dynamic-labs/sdk-react-core";

const Navbar = () => {
  return (
    <div className="bg-blue fixed left-0 right-0 w-full z-50 top-0">
      <Container>
        <nav className="flex justify-between items-center h-15 text-white p-5 w-full">
          <p className="font-extrabold text-xl">FeedR</p>
          <FaBars className="md:hidden" />
          <ul className="hidden md:flex md:gap-8 font-bold hover:cursor-pointer">
            <li>About us</li>
            <li>Features</li>
            <li>Products</li>
          </ul>
          <div className="hidden md:flex md:gap-4">
            <DynamicWidget />
          </div>
        </nav>
      </Container>
    </div>
  );
};

export default Navbar;
