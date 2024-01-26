import { FaBars } from "react-icons/fa6";
import Container from "./Container";
import { DynamicWidget, useDynamicContext } from "@dynamic-labs/sdk-react-core";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/Card";
import { Input } from "./ui/Input";
import { Button } from "./ui/Button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/Select";
import { Textarea } from "./ui/TextArea";

const categories = ["Hotels", "Hospitals", "Universities", "Restorant", "Stadiums"];

const Navbar = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const { user } = useDynamicContext();
  const [name, setName] = useState("");
  const [image, setImage] = useState<File>();

  const formHandle = () => {
    const target = { category, description, name, image };
    /***
     * past the object to firebase then i guess
     */
  };

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
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
              <button onClick={togglePopup} className="bg-white hover:bg-gray-400 text-gray-800 font-bold text-sm py-2 px-4 rounded-lg inline-flex items-center">
                <span>Add target</span>
              </button>
            )}
          </div>
        </nav>
        {isPopupVisible && (
          <div className="fixed inset-20 flex items-center justify-center">
            <Card className="w-[350px]">
              <CardHeader>
                <CardTitle>Add New Target</CardTitle>
                <CardDescription>Note a target can be added once</CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                      {/* <Label htmlFor="name">Name</Label> */}
                      <Input id="name" onChange={(e) => setName(e.target.value)} placeholder="Name of Target" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      {/* <Label htmlFor="framework">Framework</Label> */}
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
                    <Input onChange={(e) => setImage(e.target.files?.[0])} type="file" id="name" placeholder="Name of Target" />
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button onClick={formHandle}>Save Target</Button>
              </CardFooter>
            </Card>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Navbar;
