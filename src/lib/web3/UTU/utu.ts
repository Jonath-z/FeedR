import toast from "react-hot-toast";
import LocalStorage from "../../../utils/localStorage";
import { LOCAL_STORAGE_UTU_AUTH, UTU_API_RANKING, UTU_API_URL } from "../../../utils/constants";
import tokenExpired from "../../../utils/jwt";
import { UtuJwt } from "../../../types/utu";
//@ts-ignore
import { addressSignatureVerification } from "@ututrust/web-components";

type Entity = {
  address: string;
  name: string;
};

// Save Entities (feedback target)
export default async function saveAsUTUEntity(entity: Entity) {
  const utuAuth = LocalStorage.getItem<UtuJwt>(LOCAL_STORAGE_UTU_AUTH);
  if (!utuAuth) {
    toast.error("Can not save the entity, please connect to UTU");
    console.log("No UTU auth found ");
    return;
  }

  if (tokenExpired(utuAuth.access_token)) {
    toast.error("Can not save the entity, please connect to UTU");
    console.log("Token expired");
    return;
  }

  const overrideApiUrl = UTU_API_URL;
  await fetch(overrideApiUrl + "/core-api-v2/entity", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${utuAuth.access_token}`,
    },
    body: JSON.stringify({
      name: entity.name,
      type: "provider",
      ids: {
        uuid: entity.address.toLowerCase(),
      },
    }),
  })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
}

// Call this function for connecting to UTU protocol
export async function connectUTU(provider?: any) {
  const triggerUtuIdentityDataSDKEvent = (identityData: any): void => {
    const event = new CustomEvent("utuIdentityDataReady", {
      detail: identityData,
    });
    window.dispatchEvent(event);
  };

  // This passes the wallet provider to the SDK so it can do its magic
  // It effectively logs into the UTU Trust Network services and you get a response object back
  // which encapsulates the successful log in.  Among other things it contains the JWT Token.
  const authDataResponse = (await addressSignatureVerification(UTU_API_URL, provider)) as UtuJwt;
  // overrideApiUrl

  // This instructs the GUI that it can show the Recommendations, show feedback and give feedback
  // screens.
  if (authDataResponse) {
    localStorage.setItem(LOCAL_STORAGE_UTU_AUTH, JSON.stringify(authDataResponse));
  }

  // this passes the JWT token info to all parts of the SDK. Expect this SDK method to be
  // refactored into the SDK addressSignatureVerification in later versions of the SDK.
  triggerUtuIdentityDataSDKEvent(authDataResponse);
}
