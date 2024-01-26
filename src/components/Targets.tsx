import { useEffect, useState } from "react";
// import { targets } from "../mocks/targets";
import { FaQuoteLeft } from "react-icons/fa";
import { getAllTargets } from "../lib/firebase";
import { Target } from "../types/user";
import TrustButtons from "../lib/web3/UTU/TrustButtons";
import { getRanking } from "@ututrust/web-components";
import { UtuJwtData } from "../utils/jwt";
import { UtuJwt } from "../types/utu";
import { LOCAL_STORAGE_UTU_AUTH, UTU_API_URL } from "../utils/constants";
import LocalStorage from "../utils/localStorage";

const Targets = () => {
  const [targets, setTargets] = useState<Target[] | null>([]);
  const utuAuthData = UtuJwtData();

  useEffect(() => {
    const fetchTargets = async () => {
      const fetchedTargets = await getAllTargets();
      setTargets(fetchedTargets);

      if (utuAuthData && fetchedTargets) {
        const utuAuth = LocalStorage.getItem<UtuJwt>(LOCAL_STORAGE_UTU_AUTH);
        await getRanking(UTU_API_URL, utuAuthData.preferred_username, "provider", utuAuth?.access_token ?? "", fetchedTargets.map((t) => t.targetId).reverse());
      }
    };

    fetchTargets();
  }, []);

  return (
    <div className="flex text-[0.9rem] flex-col md:flex-row flex-wrap gap-5 mb-10">
      {targets?.map((target) => (
        <div key={target.targetId} className="flex flex-col gap-3  w-full md:w-72">
          <img src={target.mainImage} alt="" className=" w-full h-60 md:w-72 md:h-72 rounded-xl object-cover" />
          <div className="flex justify-between gap-2">
            <p className="font-bold">{target.name}</p>
            <p className="font-thin text-xs bg-blue/10 border border-blue/50 w-fit rounded-full px-2 py-0.5">{target.category}</p>
            {/* <p>{target.reviews}</p> */}
          </div>
          <div>
            <FaQuoteLeft className="text-slate-400" />
            <p className="text-slate-400">{target.description}</p>
          </div>
          <TrustButtons target={target} key={target.targetId} />
        </div>
      ))}
    </div>
  );
};

export default Targets;
