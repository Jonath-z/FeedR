import React from "react";
import { Target } from "../../../types/user";
import { UTU_API_URL } from "../../../utils/constants";
import { UtuJwtData } from "../../../utils/jwt";

const TrustButtons = ({ target }: { target: Target }) => {
  const utuAuthData = UtuJwtData();

  if (!utuAuthData) return <></>;
  return (
    <x-utu-root
      style={{
        fontFamily: "POPPINS",
      }}
      source-uuid={utuAuthData.preferred_username.toLowerCase()}
      target-type="provider"
    >
      <div className="flex flex-col gap-1 justify-between w-full text-sm">
        <x-utu-feedback-form-popup
          style={{
            fontFamily: "POPPINS",
          }}
          api-url={UTU_API_URL}
          source-uuid={utuAuthData.preferred_username.toLowerCase()}
          target-uuid={target.targetId}
          transaction-id={5}
        />
        <x-utu-feedback-details-popup
          style={{
            fontFamily: "POPPINS",
          }}
          api-url={UTU_API_URL}
          target-uuid={target.targetId}
          source-uuid={utuAuthData.preferred_username.toLowerCase()}
        />

        <x-utu-recommendation
          style={{
            fontFamily: "POPPINS",
          }}
          target-uuid={target.targetId}
        />
      </div>
    </x-utu-root>
  );
};

export default TrustButtons;
