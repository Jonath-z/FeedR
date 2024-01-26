import React from "react";
import { ProfileProps } from "./types/ProfileTypes";
// import Feeds from "./Feeds";
import CopyBoard from "./CopyBoard";
import Tabs from "./Tabs";
// import { Divide } from "lucide-react";

/**
 *
 * @param props is a parameter of type ProfileProps
 * @returns a profile page with the props
 */
export const Profile = (props: ProfileProps) => {
  const [activeTab, setActiveTab] = React.useState(1);
  return (
    //
    <div className="px-44 shadow">
      <div className="relative h-96 w-full rounded-b flex justify-center ">
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.forex.academy%2Fwp-content%2Fuploads%2F2019%2F12%2FBlockchain-1.jpg&f=1&nofb=1&ipt=d9a41cb80d806c684bfbd1ae590a50be8f10bc760893f398a52d7dc2d478a766&ipo=images"
          className="object-cover w-full rounded-b"
          alt="cover"
        />
        <div className="absolute -bottom-6">
          <img src={props?.profilePicture} className="object-cover border-4 border-white w-40 h-40 rounded-full" alt="cover" />
        </div>
      </div>
      <div className="flex justify-center flex -mt-2">
        <div className="mt-12 sm:mt-16">
          <h1 className="font-bold text-center text-xl sm:text-2xl text-gray-900">
            {props?.firstName} {props?.lastName}
          </h1>
          <p className="text-center text-xs sm:text-sm text-gray-400 font-medium">{props?.email}</p>
          <p className="text-center text-xs sm:text-sm text-gray-400 font-medium">
            <br />
            WalletAddress:
            <CopyBoard textToCopy={props?.walletAddress} />
          </p>
          <br />

          <div className="w-full">
            <div className="flex justify-center mt-4">
              <button className={`px-4 py-2 mr-2 text-sm rounded ${activeTab === 1 ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"}`} onClick={() => setActiveTab(1)}>
                The Targets You Reviewed
              </button>
              <button className={`px-4 text-sm py-2 rounded ${activeTab === 2 ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"}`} onClick={() => setActiveTab(2)}>
                Targets You Created
              </button>
            </div>

            {activeTab === 1 && props?.targets.length > 0 && props.targets.map((feed) => <Tabs props={feed} activeTab={activeTab} />)}
            {activeTab === 2 && props?.targets.length > 0 && props.targets.map((feed) => <Tabs props={feed} activeTab={activeTab} />)}
          </div>
          <div className="flex justify-between items-center my-3 sm:my-5 px-6">
            <a
              href=""
              className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-xs sm:text-sm text-center w-full sm:w-auto py-2 sm:py-3"
            >
              Facebook
            </a>
            <a
              href=""
              className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-xs sm:text-sm text-center w-full sm:w-auto py-2 sm:py-3"
            >
              Twitter
            </a>
            <a
              href=""
              className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-xs sm:text-sm text-center w-full sm:w-auto py-2 sm:py-3"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
