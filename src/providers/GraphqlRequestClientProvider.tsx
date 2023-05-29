"use client";

import { createContext } from "react";
import { GraphQLClient } from "graphql-request";
import { getSdk } from "@/graphql/requests";

type Props = {
  children?: React.ReactNode;
  uri: string;
};

export const GraphqlRequestClientContext = createContext<
  ReturnType<typeof getSdk>
>(null!);

export const GraphqlRequestClientProvider = ({ children, uri }: Props) => {
  const client = new GraphQLClient(uri, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return (
    <GraphqlRequestClientContext.Provider value={getSdk(client)}>
      {children}
    </GraphqlRequestClientContext.Provider>
  );
};
