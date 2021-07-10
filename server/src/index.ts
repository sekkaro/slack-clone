import "reflect-metadata";
import "dotenv-safe/config";

import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { HelloResolver } from "./resolvers/hello";
import { createConnection } from "typeorm";
import { User } from "./entities/User";
import { Team } from "./entities/Team";
import { Channel } from "./entities/Channel";
import { Message } from "./entities/Message";
import { MyContext } from "./types";
import { UserResolver } from "./resolvers/user";
import { TeamResolver } from "./resolvers/team";
import { createUserLoader } from "./utils/createUserLoader";
import { ChannelResolver } from "./resolvers/channel";
import { MessageResolver } from "./resolvers/message";

const main = async () => {
  const conn = await createConnection({
    type: "postgres",
    url: process.env.DATABASE_URL,
    logging: true,
    synchronize: true,
    entities: [User, Team, Channel, Message],
    // dropSchema: true,
  });

  const app = express();

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [
        HelloResolver,
        UserResolver,
        TeamResolver,
        ChannelResolver,
        MessageResolver,
      ],
      validate: false,
    }),
    context: ({ req, res }): MyContext => ({
      req,
      res,
      user: {
        id: 1,
      },
      userLoader: createUserLoader(),
    }),
  });

  apolloServer.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log("server started on localhost:4000");
  });
};

main().catch((err) => {
  console.error(err);
});
