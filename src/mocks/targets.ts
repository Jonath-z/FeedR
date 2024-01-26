import { generateEthereumUuid } from "../utils/create-utu-uuid";

export const targets = [
  {
    name: "target 1",
    description: "description 3",
    id: generateEthereumUuid("target 1"),
  },
  {
    name: "target 2",
    description: "description 2",
    id: generateEthereumUuid("target 2"),
  },
  {
    name: "target 3",
    description: "description 3",
    id: generateEthereumUuid("target 3"),
  },
];
