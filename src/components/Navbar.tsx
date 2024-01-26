import { FaBars } from "react-icons/fa6";
import Container from "./Container";
import { DynamicWidget, useDynamicContext } from "@dynamic-labs/sdk-react-core";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/Card";
import { Input } from "./ui/Input";
import { Button } from "./ui/Button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/Select";
import { Textarea } from "./ui/TextArea";
import { createTarget, uploadFile } from "../lib/firebase/index";
import { generateEthereumUuid } from "../utils/create-utu-uuid";
import { Target } from "../types/user";

import saveAsUTUEntity from "../lib/web3/utu";
import { Progress } from "./ui/Progress";
import toast from "react-hot-toast";
import useClickOutside from "./hooks/useClickoutside";

const categories = ["Hotels", "Hospitals", "Universities", "Restorant", "Stadiums"];

const Navbar = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const { user, primaryWallet } = useDynamicContext();
  const [name, setName] = useState("");
  const [image, setImage] = useState<File>();
  const [uploadProgress, setUploadProgress] = useState(0);

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  const ref = useClickOutside(togglePopup);

  const canCreateTarget = !!category && !!image && !!name && !!description;

  const onSaveTarget = async () => {
    if (!canCreateTarget) return;

    const target: Target = {
      category: category,
      name: name,
      postedBy: primaryWallet?.address ?? user?.email ?? "",
      targetId: generateEthereumUuid(`${name}-${category}`),
      description: description,
      images: [],
      mainImage: "",
      details: {
        address: "",
        url: "",
        website: "",
      },
    };

    try {
      // upload the target image to firebase
      await uploadFile(
        image as File,
        async (url) => {
          target.mainImage = url;
          // save target info
          await createTarget(target);
          // notify UTU about new target
          await saveAsUTUEntity({ address: target.targetId, name: target.name });
          toast.success(`${target.name} successfully listed`);
          setName("");
          setDescription("");
          setImage(undefined);
          setUploadProgress(0);
          setPopupVisible(false);
        },
        (progress) => {
          setUploadProgress(progress);
        },
        (err) => {
          toast.error(err?.message ?? "An error occurred while uploading the file.");
          console.log(err);
        },
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-blue fixed left-0 right-0 w-full z-50 top-0">
      <Container>
        <nav className="flex justify-between items-center h-15 text-white p-5 w-full">
          <a href="/" className="font-extrabold text-xl">
            FeedR
          </a>
          <FaBars className="md:hidden" />
          <ul className="hidden md:flex md:gap-8 font-bold hover:cursor-pointer">
            <li>About us</li>
            <li>Features</li>
            <li>Products</li>
          </ul>
          <div className="hidden md:flex md:gap-4">
            <DynamicWidget />

            {user != null && (
              <button onClick={() => setPopupVisible(true)} className="bg-white hover:bg-gray-400 text-gray-800 font-bold text-sm py-2 px-4 rounded-lg inline-flex items-center">
                <span>Add target</span>
              </button>
            )}
          </div>
        </nav>
      </Container>
      {isPopupVisible && (
        <div className="fixed backdrop-blur-lg inset-0 flex items-center justify-center">
          <Card ref={ref} className="max-sm:w-[21.875rem] w-1/2">
            <CardHeader>
              <CardTitle>Contribute by adding a new target</CardTitle>
              <CardDescription>Note a target can be added once</CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Input id="name" onChange={(e) => setName(e.target.value)} placeholder="Name of Target" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Select onValueChange={(e) => setCategory(e)}>
                      <SelectTrigger id="framework">
                        <SelectValue placeholder="Category" />
                      </SelectTrigger>
                      <SelectContent position="popper">
                        {categories.map((category, index) => (
                          <SelectItem key={`cat-${index}`} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Textarea onChange={(e) => setDescription(e.target.value)} className="resize-none" placeholder="Describe your target here" />
                  </div>
                  <Input onChange={(e) => setImage(e.target.files?.[0])} type="file" accept="image/*" id="name" placeholder="Name of Target" />
                  {uploadProgress > 0 && <Progress className="bg-blue appearance-none " max={100} value={uploadProgress} />}
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={togglePopup}>
                Cancel
              </Button>
              <Button disabled={!canCreateTarget} onClick={onSaveTarget} className="bg-blue hover:bg-blue">
                Save Target
              </Button>
            </CardFooter>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Navbar;
