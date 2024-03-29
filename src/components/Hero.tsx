import { Link } from "react-router-dom";
import HeroImage from "../assets/hero-image.png";
import Container from "./Container";
import { LOCAL_STORAGE_ONBOARDING_STATUS } from "../utils/constants";
const Hero = () => {
  return (
    <div className="bg-blue">
      <Container>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:py-32  p-5  flex flex-col justify-center gap-6 text-white">
            <div>
              <p className="font-extrabold text-3xl md:text-7xl">Trustworthy Recommendations</p>
            </div>
            <p>
              Navigate a world of personalized discovery with FeedR, where recommendations are tailored to you. Trust the process, embrace the recommendations, and let your journey
              begin.
            </p>
            <Link to={localStorage.getItem(LOCAL_STORAGE_ONBOARDING_STATUS) ? "home" : "onboard"} className="bg-white px-5 py-2 rounded text-blue w-32">
              Start Now
            </Link>
          </div>

          <img src={HeroImage} alt="hero" className="bg-blue px-5  md:py-32 md:w-[34rem]" />
        </div>
      </Container>
    </div>
  );
};

export default Hero;
