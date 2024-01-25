import React from "react";
import { ProfileProps } from "./types/ProfileTypes";
import Feeds from "./Feeds";
import CopyBoard from "./CopyBoard";
import Tabs from "./Tabs";
import { Divide } from "lucide-react";

export const Profile = (props: ProfileProps) => {
  const [activeTab, setActiveTab] = React.useState(1);
  return (
    <div className="container mx-auto my-10 sm:my-20 lg:my-32">
      <div>
        <div className="bg-white relative shadow rounded-lg w-11/12 sm:w-11/12 md:w-3/4 lg:w-2/4 xl:w-1/3 mx-auto">
          <div className="flex justify-center">
            <img
              src={props?.profilePicture}
              alt=""
              className="rounded-full mx-auto absolute -top-14 sm:-top-20 w-24 sm:w-32 h-24 sm:h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110"
            />
          </div>

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
            <div className="w-full">
              <button className="px-4 py-2 mr-2 text-sm rounded" onClick={() => setActiveTab(1)}>
                The Targets You Reviewed
              </button>
              <button onClick={() => setActiveTab(2)} className="px-4 text-sm py-2 rounded">
                Targets You Created
              </button>

              {activeTab === 1 && props?.targets.length > 0 && props.targets.map((feed) => <Tabs props={feed} activeTab={activeTab} />)}
              {activeTab === 2 && props?.targets.length > 0 && props.targets.map((feed) => <Tabs props={feed} activeTab={activeTab} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
