import { DocumentNode } from "graphql";
import { client } from "./apolloClientConfig";

export const fetchQuery = async ({ query }: { query: DocumentNode }) => {
  const { data } = await client.query({
    query,
  });

  return data;
};
