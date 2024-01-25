import HeroImage from "../assets/hero-image.png";
import Container from "./Container";
const Hero = () => {
  return (
    <div className="bg-blue">
      <Container>
        <div className="flex flex-col md:flex-row">
          <div className="w-full h-96 p-5  flex flex-col justify-center gap-6 text-white">
            <div>
              <p className="font-extrabold text-3xl">Trustworthy Recommendations</p>
              <p className="font-extrabold text-3xl">At your fingerprints</p>
            </div>
            <p>
              Navigate a world of personalized discovery with FeedR, where recommendations are tailored to you. Trust the process, embrace the recommendations, and let your journey
              begin
            </p>
            <button className="bg-white px-5 py-2 rounded-2xl text-blue w-32">Start Now</button>
          </div>

          <img src={HeroImage} className="bg-blue px-5" />
        </div>
      </Container>
    </div>
  );
};

export default Hero;