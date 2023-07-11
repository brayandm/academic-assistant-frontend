import { Session } from "next-auth";

export function getHeaders(session: Session, headers?: any) {
  return {
    ...headers,
    Authorization: `Bearer ${session?.user.access_token}`,
    Accept: "application/json",
  };
}

export function parseGraphqlError(error: any) {
  return JSON.parse("{" + error.message.split("{").slice(1).join("{"));
}

export function getGraphqlError(error: any) {
  const parsedError = parseGraphqlError(error);

  if (!parsedError.response.errors[0].message) return null;

  let errorMessage = parsedError.response.errors[0].message;

  if (parsedError.response.errors[0].extensions.reason)
    errorMessage += ", " + parsedError.response.errors[0].extensions.reason;

  return errorMessage;
}
