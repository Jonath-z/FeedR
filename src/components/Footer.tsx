import Container from "./Container";

const Footer = () => {
  return (
    <div className="bg-blue w-full sticky text-[0.8rem] md:text-[1rem]">
      <Container>
        <div className="flex  justify-between  gap-2 text-white p-5">
          <div>
            <p className="font-extrabold md:text-xl">FeedR</p>
            <p className="text-slate-400">©2024 FeedR Inc.</p>
          </div>

          <ul className="flex flex-col md:flex-row gap-3 font-bold hover:cursor-pointer">
            <li>Blog</li>
            <li>About us</li>
            <li>Product</li>
            <li>Services</li>
            <li>Developer</li>
            <li>
              <a href="onboard">Social connector</a>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
