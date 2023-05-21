import { Session } from "next-auth";

export function getHeaders(session: Session, headers?: any) {
  return {
    ...headers,
    // @ts-ignore
    Authorization: `Bearer ${session?.user?.access_token}`,
    Accept: "application/json",
  };
}