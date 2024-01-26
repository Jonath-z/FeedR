import { generateEthereumUuid } from "./create-utu-uuid";

export class Entity {
  name: string;
  ids: {
    uuid: string;
    address?: string;
  };
  image: string;
  type: string;
  uuid?: string;

  constructor(name: string, address?: string, uuid?: string, image?: string) {
    this.name = name;
    this.ids = {
      uuid: uuid || generateEthereumUuid(name),
      address: address,
    };
    this.image = image || `https://api.dicebear.com/7.x/adventurer/svg?seed=${this.ids.uuid}`;
    this.type = "telegram_user";
  }
}
