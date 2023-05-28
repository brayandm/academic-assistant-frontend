import { GraphQLClient } from "graphql-request";
import { getSdk } from "@/graphql/requests";

export const GRAPHQL_ENDPOINT = "http://localhost:83/graphql";

const client = new GraphQLClient(GRAPHQL_ENDPOINT, {
  headers: {
    "Content-Type": "application/json",
  },
});

export const sdk = getSdk(client);

export default client;
