import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "http://localhost:83/graphql",
  documents: ["**/*.graphql"],
  generates: {
    "./src/graphql/server.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-graphql-request",
      ],
      config: {
        pureMagicComment: true,
        skipTypename: true,
      },
    },
  },
};
export default config;
