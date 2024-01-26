import React from "react";
import { FeedProps } from "./types/ProfileTypes";
/**
 *
 * @param feedProps is a parameter of type FeedProps
 * @returns a card with the feedProps on the profile page
 */

export const Feeds = (feedProps: FeedProps) => {
  return (
    <div className="mt-5 w-full flex flex-col items-center overflow-hidden text-sm">
      <a href="#" className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
        <img src={feedProps.targetImage} alt="" className="rounded-full h-6 shadow-md inline-block mr-2" />
        {feedProps.targetName}
        <p className="text-gray-500 text-xs">{feedProps.targetRating} reviews</p>
        <p className="text-gray-500 text-xs"> last reviewed at{feedProps.lastFeedAt} </p>
      </a>
    </div>
  );
};

export default Feeds;
