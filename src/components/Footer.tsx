import Container from "./Container";

const Footer = () => {
  return (
    <div className="bg-blue w-full sticky">
      <Container>
        <div className="flex  justify-between items-center gap-2 text-white p-5">
          <div>
            <p className="font-extrabold text-xl">FeedR</p>
            <p className="text-slate-400">©2024 FeedR Inc.</p>
          </div>

          <ul className="flex gap-3 font-bold hover:cursor-pointer">
            <li>Blog</li>
            <li>About us</li>
            <li>Product</li>
            <li>Services</li>
            <li>Developer</li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
