import { Session } from "next-auth";

export function getHeaders(session: Session, headers?: any) {
  return {
    ...headers,
    Authorization: `Bearer ${(session?.user as any).access_token}`,
    Accept: "application/json",
  };
}
