import { GraphQLClient } from "graphql-request";
import { getSdk } from "@/graphql/requests";

const client = new GraphQLClient(process.env.GRAPHQL_URL_FROM_SERVER!, {
  headers: {
    "Content-Type": "application/json",
  },
});

const graphqlRequestServer = getSdk(client);

export default graphqlRequestServer;
