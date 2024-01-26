import { isExpired, decodeToken } from "react-jwt";
import { LOCAL_STORAGE_UTU_AUTH } from "./constants";
import { UTUDecoedJwt, UtuJwt } from "../types/utu";
import LocalStorage from "./localStorage";

export default function tokenExpired(token: string): boolean {
  return isExpired(token);
}

export function UtuJwtData() {
  const utuAuthJwt = LocalStorage.getItem<UtuJwt>(LOCAL_STORAGE_UTU_AUTH);
  if (!utuAuthJwt) return null;
  return decodeToken(utuAuthJwt.access_token) as UTUDecoedJwt;
}
