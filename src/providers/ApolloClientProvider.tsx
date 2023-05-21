"use client";

import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

type Props = {
  children?: React.ReactNode;
  uri: string;
};

export const ApolloClientProvider = ({ children, uri }: Props) => {
  const client = new ApolloClient({
    uri: uri,
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
