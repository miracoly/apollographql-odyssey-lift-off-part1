import { ApolloServer } from "@apollo/server";
import { typeDefs } from "./schema.js";
import { startStandaloneServer } from "@apollo/server/standalone";
import { addMocksToSchema } from "@graphql-tools/mock";
import { makeExecutableSchema } from "@graphql-tools/schema";

const startApolloServer = async () => {
  const server = new ApolloServer({
    schema: addMocksToSchema({
      schema: makeExecutableSchema({ typeDefs }),
    }),
  });
  const { url } = await startStandaloneServer(server);
  console.log(`
    🚀  Server is running!
    📭  Query at ${url}
  `);
};

await startApolloServer();
