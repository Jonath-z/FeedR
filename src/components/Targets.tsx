import { targets } from "../mocks/targets";
import { FaQuoteLeft } from "react-icons/fa";

const Targets = () => {
  return (
    <div className="flex text-[0.9rem] flex-col md:flex-row flex-wrap gap-5 mb-10">
      {targets.map((target) => (
        <div className="flex flex-col gap-3  w-full md:w-72">
          <img src={target.image} alt="" className=" w-full h-60 md:w-72 md:h-72 rounded-xl" />
          <div className="flex justify-between gap-2">
            <p className="font-bold">{target.name}</p>
            <p>{target.reviews}</p>
          </div>
          <div>
            <FaQuoteLeft className="text-slate-400" />
            <p className="text-slate-400">{target.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Targets;
