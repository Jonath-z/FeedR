import { ProfileProps } from "./types/ProfileTypes";
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
import truncate from "../../utils/truncate";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { targets } from "../../mocks/targets";
import { OnboardingCard } from "../Onboarding";

export const Profile = (props: ProfileProps) => {
  const { user, primaryWallet } = useDynamicContext();

  return (
    <div className="shadow">
      <div className="relative h-96 w-full rounded-b flex justify-center ">
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.forex.academy%2Fwp-content%2Fuploads%2F2019%2F12%2FBlockchain-1.jpg&f=1&nofb=1&ipt=d9a41cb80d806c684bfbd1ae590a50be8f10bc760893f398a52d7dc2d478a766&ipo=images"
          className="object-cover w-full"
          alt="cover"
        />
        <div className="absolute -bottom-6">
          <img src={props?.profilePicture} className="object-cover border-4 border-white w-40 h-40 rounded-full" alt="cover" />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="mt-12 sm:mt-16">
          <div className="flex flex-col items-center justify-center">
            <h1 className="font-bold text-center text-xl sm:text-2xl text-gray-900">
              {user?.firstName} {user?.lastName}
            </h1>
            <p className="text-center text-xs sm:text-sm text-gray-400 font-medium">{user?.email}</p>
            <p className="text-center text-xs sm:text-sm text-gray-400 font-medium">{truncate(primaryWallet?.address ?? "")}</p>
          </div>

          <Tabs defaultValue="post" className="max-sm:min-w-[18.75rem] min-w-[31.25rem] my-10">
            <TabsList className="w-full">
              <TabsTrigger value="post" className="w-full">
                Your Post
              </TabsTrigger>
              <TabsTrigger value="feed" className="w-full">
                Your Activity
              </TabsTrigger>
            </TabsList>
            <TabsContent value="post" className="flex flex-col gap-2 my-5">
              {targets.map((target) => (
                <OnboardingCard key={target.id} target={target} displayFeedback={false} />
              ))}
            </TabsContent>
            <TabsContent value="feed" className="flex flex-col gap-2 my-5">
              {targets.map((target) => (
                <OnboardingCard key={target.id} target={target} displayFeedback={false} />
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};
