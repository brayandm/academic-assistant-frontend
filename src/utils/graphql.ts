import { Session } from "next-auth";

export function getOptions(session: Session) {
  return {
    context: {
      headers: {
        Accept: "application/json",
        // @ts-ignore
        Authorization: `Bearer ${session?.user?.access_token}`,
        "Access-Control-Allow-Origin": "*",
      },
    },
  };
}
