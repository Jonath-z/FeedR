import { isExpired } from "react-jwt";

export default function tokenExpired(token: string): boolean {
  const hasExpired = isExpired(token);
  return hasExpired;
}
