import "dotenv/config";
import express from "express";
import { ApolloServer } from "apollo-server-express";

import typeDefs from "./schema";
import resolvers from "./resolvers";
import sequelize from "./models";

const main = async () => {
  const app = express();
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await server.start();

  server.applyMiddleware({ app });

  app.use((req, res) => {
    res.status(200);
    res.send("Hello!");
    res.end();
  });

  await sequelize.sync({});

  await new Promise((resolve) => app.listen({ port: 8080 }, resolve));
  console.log(`🚀 Server ready at http://localhost:8080${server.graphqlPath}`);
  return { server, app };
};

main();
