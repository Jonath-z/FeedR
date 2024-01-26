import { DynamicWidget } from "@dynamic-labs/sdk-react-core";

const Header = () => {
  return (
    <div>
      <p className="font-extrabold text-xl">FeedR</p>
      <div>
        <DynamicWidget />
      </div>
    </div>
  );
};

export default Header;
