import { AiFillBank } from "react-icons/ai";
import { FaBookOpen } from "react-icons/fa";
import { MdCardTravel } from "react-icons/md";
import { GiKnifeFork } from "react-icons/gi";
import { MdHealthAndSafety } from "react-icons/md";

export const CATEGORIES: { name: string; icon: React.ReactElement }[] = [
  { name: "University", icon: <AiFillBank /> },
  { name: "Books", icon: <FaBookOpen /> },
  { name: "Travel", icon: <MdCardTravel /> },
  { name: "Food", icon: <GiKnifeFork /> },
  { name: "Health", icon: <MdHealthAndSafety /> },
];
