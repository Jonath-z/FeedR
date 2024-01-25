import { FaBars } from "react-icons/fa6";
import Logo from "../assets/logoo.svg";
import Container from "./Container";

const Navbar = () => {
  return (
    <div className="bg-blue">
      <Container>
        <nav className="flex justify-between h-15 text-white p-5 w-full">
          <p className="font-extrabold text-xl">FeedR</p>
          <FaBars className="md:hidden" />
          <ul className="hidden md:flex md:gap-8 font-bold hover:cursor-pointer">
            <li>About us</li>
            <li>Features</li>
            <li>Products</li>
          </ul>
          <div className="hidden md:flex md:gap-4">
            <button className="hover:bg-white hover:px-3 hover:py-1 hover:text-blue hover:rounded">Log In</button>
            <button className="bg-white px-3 py-1 rounded text-blue">Sign Up</button>
          </div>
        </nav>
      </Container>
    </div>
  );
};

export default Navbar;
