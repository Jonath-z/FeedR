import { ethers } from "ethers";

export function generateEthereumUuid(randomId: string) {
  return ethers.utils
    .id(randomId)
    .slice(0, 40 + 2)
    .toLowerCase();
}
