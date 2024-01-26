import { Link } from "react-router-dom";
import { LOCAL_STORAGE_ONBOARDING_STATUS, UTU_API_URL } from "../utils/constants";
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
import { useEffect } from "react";
import saveAsUTUEntity from "../lib/web3/UTU/utu";
import { targets } from "../mocks/targets";

declare global {
  namespace JSX {
    // prevents typescript errors for the tags
    interface IntrinsicElements {
      "x-utt-balance": any;
      "x-utu-app-link": any;
      "x-utu-wallet-disconnect": any;
      "x-utu-root": any;
      "x-utu-recommendation": any;
      "x-utu-feedback-details-popup": any;
      "x-utu-feedback-form-popup": any;
    }
  }
}

export const OnboardingCard = ({ target, displayFeedback = true }: { target: (typeof targets)[0]; displayFeedback?: boolean }) => {
  const { primaryWallet } = useDynamicContext();
  useEffect(() => {
    targets.forEach(async (mock) => {
      saveAsUTUEntity({ address: mock.id, name: mock.name });
    });
  }, []);

  return (
    <div className="rounded-md bg-blue/10 border border-blue p-4">
      <h3 className="font-semibold text-lg text-blue">{target.name}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">{target.description}</p>
      {displayFeedback && (
        <x-utu-root
          style={{
            fontFamily: "POPPINS",
          }}
          source-uuid={primaryWallet?.address?.toLowerCase()}
          target-type="provider"
        >
          <div className="flex flex-col gap-1 justify-between w-full text-sm">
            <x-utu-feedback-form-popup
              style={{
                fontFamily: "POPPINS",
              }}
              api-url={UTU_API_URL}
              source-uuid={primaryWallet?.address?.toLowerCase()}
              target-uuid={target.id}
              transaction-id={5}
            />

            <x-utu-recommendation
              style={{
                fontFamily: "POPPINS",
              }}
              target-uuid={target.id}
            />
          </div>
        </x-utu-root>
      )}
    </div>
  );
};

const Onboarding = () => {
  return (
    <div className="max-w-[1440px] mx-auto relative min-h-screen h-svh w-full px-4 sm:px-6 lg:px-8">
      <div className="my-10 w-full">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-blue">Welcome to FeedR & UTU Social connector!</h2>
        <p className="mt-2 text-center text-xs text-gray-600">
          We aim to provide you with the best personalized recommendation.
          <br /> Connect your wallet, and your social media for a better experience.
        </p>
      </div>

      <iframe
        src="https://stage-api.ututrust.com"
        title="UTU-connector"
        style={{
          height: "90%",
          width: "-webkit-fill-available",
        }}
      />

      <div className="flex p-5 justify-between bottom-0 left-0 right-0 w-full">
        <div className="flex items-center justify-between">
          <div className="text-sm">
            <Link to="/" className="font-medium text-blue">
              Back
            </Link>
          </div>
        </div>
        <div>
          <Link
            onClick={() => localStorage.setItem(LOCAL_STORAGE_ONBOARDING_STATUS, "done")}
            to="/home"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue ocus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Proceed
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
