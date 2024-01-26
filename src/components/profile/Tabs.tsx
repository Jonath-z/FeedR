import React, { useState } from "react";
import { FeedProps } from "./types/ProfileTypes";
import Feeds from "./Feeds";

type Props = {
  props: FeedProps;

  activeTab: number;
};

const Tabs: React.FC<Props> = ({ props, activeTab }) => {
  return (
    <div className="">
      {activeTab === 1 && (
        <div className="text-sm text-gray-900 px-6">
          <div className="text-sm text-gray-900 px-6">{<Feeds {...props} />}</div>
        </div>
      )}

      {activeTab === 2 && <div className="text-sm text-gray-900 px-6">{<Feeds {...props} />}</div>}
    </div>
  );
};

export default Tabs;
