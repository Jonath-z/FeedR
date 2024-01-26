import { Entity } from "../utils/utuEntity";

export type UtuJwt = {
  access_token: string;
  expires_in: number;
  refresh_expires_in: number;
  refresh_token: string;
  token_type: string;
  "not-before-policy": number;
  session_state: string;
  scope: string;
};

export type UTUDecoedJwt = {
  exp: number;
  iat: number;
  jti: string;
  iss: string;
  aud: string;
  sub: string;
  typ: string;
  azp: string;
  session_state: string;
  acr: string;
  realm_access: RealmAccess;
  resource_access: ResourceAccess;
  scope: string;
  email_verified: boolean;
  preferred_username: string;
};

export type RealmAccess = {
  roles: string[];
};

export type ResourceAccess = {
  account: RealmAccess;
};

export type IRankingItem = {
  entity: Entity;
  relationshipPaths: [];
  summaryText: string;
  summaryImages: string[];
};

export type IRankingsResponse = {
  status: "success" | "error";
  result: IRankingItem[];
};
